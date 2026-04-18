const express = require('express');
const router = express.Router();
const Request = require('../models/Request');

// POST create a new request
router.post('/', async (req, res) => {
  try {
    const { content, userName } = req.body;
    if (!content || content.trim().length < 5) {
      return res.status(400).json({ success: false, error: 'La solicitud debe tener al menos 5 caracteres.' });
    }
    const request = await Request.create({ content: content.trim(), userName });
    res.status(201).json({ success: true, data: request });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET all requests 
router.get('/', async (req, res) => {
  try {
    const requests = await Request.find().sort({ createdAt: -1 }).limit(50);
    res.json({ success: true, data: requests });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// PATCH upvote a request
router.patch('/:id/vote', async (req, res) => {
  try {
    const request = await Request.findByIdAndUpdate(
      req.params.id,
      { $inc: { votes: 1, priority: 1 } },
      { new: true }
    );
    if (!request) return res.status(404).json({ success: false, error: 'Solicitud no encontrada' });
    res.json({ success: true, data: request });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
