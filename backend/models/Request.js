const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true,
  },
  userName: {
    type: String,
    default: 'Anónimo',
  },
  status: {
    type: String,
    enum: ['pending', 'in_review', 'resolved', 'rejected'],
    default: 'pending',
  },
  priority: {
    type: Number,
    default: 0, 
  },
  votes: {
    type: Number,
    default: 1,
  },
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);
