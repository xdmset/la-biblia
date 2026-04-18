const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  section: {
    type: String,
    required: true,
    enum: ['onboarding', 'ventas', 'postventa', 'universidad', 'general'],
  },
  subsection: {
    type: String,
    default: null,
  },
  content: {
    type: String,
    required: true,
  },
  tags: [{ type: String }],
  order: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

// Full-text search index
articleSchema.index({ title: 'text', content: 'text', tags: 'text' });
articleSchema.index({ section: 1, order: 1 });

module.exports = mongoose.model('Article', articleSchema);
