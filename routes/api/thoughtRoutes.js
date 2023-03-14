const router = require('express').Router();
const {
  getThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThought).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
