require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();


app.use(
  cors({
    origin: process.env.FRONTEND_URL || [
      'http://localhost:3000',
      'http://localhost:5173',
    ],
    credentials: true,
  })
);

app.use(express.json());


const aiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  message: {
    success: false,
    error: 'Demasiadas solicitudes. Espera un momento.',
  },
});


app.use('/api/articles', require('./routes/articles'));
app.use('/api/requests', require('./routes/requests'));
app.use('/api/ai', aiLimiter, require('./routes/ai'));


app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'La Biblia API running',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});


app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Ruta no encontrada',
  });
});


app.use((err, req, res, next) => {
  console.error('🔥 Error:', err);
  res.status(500).json({
    success: false,
    error: 'Error interno del servidor',
  });
});


const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/la-biblia';

mongoose
  .connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 10000,
    connectTimeoutMS: 10000,
  })
  .then(() => {
    console.log('✅ Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });