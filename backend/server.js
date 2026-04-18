require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Mongo connected');
    app.listen(PORT, '0.0.0.0', () => {
      console.log('Server running ' + PORT);
    });
  })
  .catch(err => {
    console.error(err);
  });