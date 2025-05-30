
const express = require('express');
const { addBook, getBooks, getBookById } = require('../controllers/bookController');
const { addReview } = require('../controllers/reviewController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', auth, addBook);
// router.get('/', getBooks);
// router.get('/:id', getBookById);
// router.post('/:id/reviews', auth, addReview);