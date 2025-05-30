
const Review = require('../models/Review');

exports.addReview = async (req, res) => {
  const exists = await Review.findOne({ user: req.user.id, book: req.params.id });
  if (exists) return res.status(400).json({ message: 'Review already exists' });

  const review = new Review({ ...req.body, user: req.user.id, book: req.params.id });
  await review.save();
  res.status(201).json(review);
};

exports.updateReview = async (req, res) => {
  const review = await Review.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body,
    { new: true }
  );
  if (!review) return res.status(404).json({ message: 'Review not found' });
  res.json(review);
};

exports.deleteReview = async (req, res) => {
  const review = await Review.findOneAndDelete({ _id: req.params.id, user: req.user.id });
  if (!review) return res.status(404).json({ message: 'Review not found' });
  res.json({ message: 'Review deleted' });
}