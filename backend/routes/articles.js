const express = require('express');
const router = express.Router();
const Article = require('../models/Article');


router.get('/', async (req, res) => {
  try {
    const { section } = req.query;
    const filter = { isActive: true };
    if (section) filter.section = section;
    
    const articles = await Article.find(filter)
      .select('title slug section subsection tags order')
      .sort({ section: 1, order: 1 });
    
    res.json({ success: true, data: articles });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET single article by slug
router.get('/:slug', async (req, res) => {
  try {
    const article = await Article.findOne({ slug: req.params.slug, isActive: true });
    if (!article) return res.status(404).json({ success: false, error: 'Artículo no encontrado' });
    res.json({ success: true, data: article });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET text search
router.get('/search/query', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.json({ success: true, data: [] });

    const articles = await Article.find(
      { $text: { $search: q }, isActive: true },
      { score: { $meta: 'textScore' } }
    )
      .sort({ score: { $meta: 'textScore' } })
      .limit(10);

    res.json({ success: true, data: articles });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
