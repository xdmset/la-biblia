require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function list() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  try {
    // Intentamos listar los modelos disponibles para tu llave
    const result = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    console.log("Conexión básica exitosa. El problema es el endpoint o la versión.");
  } catch (e) {
    console.error("Error de acceso:", e.message);
  }
}
list();