const express = require('express');
const { updateReview, deleteReview } = require('../controllers/reviewController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.put('/:id', auth, updateReview);
router.delete('/:id', auth, deleteReview);

module.exports = router;