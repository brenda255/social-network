const router = require('express').Router();
const {
  getThought,
  getThoughtId,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThought).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getThoughtId)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
