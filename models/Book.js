// models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String
});

// module.exports = mongoose.models.Book || mongoose.model('Book', bookSchema);
module.exports = mongoose.model('Book', bookSchema);
