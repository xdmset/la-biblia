const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const Article = require('../models/Article');

// No inicializamos aquí arriba para evitar que tome valores undefined al cargar el archivo
router.post('/search', async (req, res) => {
  try {
    const { query } = req.body;

    
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("❌ ERROR: La API Key no llegó a la ruta.");
      return res.status(500).json({ error: "Configuración de API faltante en el servidor." });
    }

   
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // OBTENER DATOS DE MONGO
    const articles = await Article.find({ isActive: true }).select('title slug content').lean();
    const knowledgeBase = articles.map(a => 
      `TÍTULO: ${a.title} | SLUG: ${a.slug} | INFO: ${a.content?.substring(0, 800)}`
    ).join('\n\n');

    // MODELO 
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Actúa como asistente de ventas. Info: ${knowledgeBase}\nPregunta: ${query}\nResponde en español y añade este JSON al final: {"sources": ["slug"]}`;

    // EJECUCIÓN
    console.log("--- Llamando a Gemini API ---");
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    //  PROCESAR FUENTES
    let sources = [];
    let cleanAnswer = text;
    const jsonMatch = text.match(/\{"sources":\s*\[.*?\]\}/s);
    
    if (jsonMatch) {
      try {
        sources = JSON.parse(jsonMatch[0]).sources || [];
        cleanAnswer = text.replace(jsonMatch[0], '').trim();
      } catch (e) {
        console.log("Error al parsear fuentes, ignorando...");
      }
    }

    const sourceArticles = articles
      .filter(a => sources.includes(a.slug))
      .map(a => ({ title: a.title, slug: a.slug }));

    res.json({
      success: true,
      answer: cleanAnswer,
      sources: sourceArticles
    });

  } catch (err) {
    console.error("❌ ERROR EN RUTA AI:", err);
    res.status(500).json({
      success: false,
      error: "Error de comunicación con la IA",
      message: err.message
    });
  }
});

module.exports = router;