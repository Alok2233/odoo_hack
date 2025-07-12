const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  type: String,
  size: String,
  condition: String,
  tags: [String],
  images: [String],
  points: { type: Number, default: 10 },
  userId: String,
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);