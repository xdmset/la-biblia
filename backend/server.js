require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL
    ? process.env.FRONTEND_URL.split(',')
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));

app.use(express.json());

const aiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: 'Demasiadas solicitudes' }
});

app.get('/api/health', (req, res) => {
  res.json({ success: true, status: 'ok' });
});

app.use('/api/articles', require('./routes/articles'));
app.use('/api/requests', require('./routes/requests'));
app.use('/api/ai', aiLimiter, require('./routes/ai'));

app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Ruta no encontrada' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: false, error: 'Error interno' });
});

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI no definida');
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log('Connected to MongoDB');

    app.listen(PORT, '0.0.0.0', () => {
      console.log('Server running on port ' + PORT);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();