const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // TODO (Student): Add the missing fields based on the instructions.md
  // 1. description
  // 2. category
  description: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
