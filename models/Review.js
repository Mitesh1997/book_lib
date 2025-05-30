const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    rating: { type: Number, min: 1, max: 5 },
    comment: String
  });
  
  // export default mongoose.model('Review', reviewSchema);
  module.exports = mongoose.model('Review', reviewSchema);