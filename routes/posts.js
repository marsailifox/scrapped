const express = require("express");
const router = express.Router();
const postController = require('../controllers/posts');

router.get('/', postController.getAllPosts);
router.get('/new', postController.createPost);
router.get('/:id', postController.getPost);
router.delete('/posts/:id', postController.deletePost);
router.post('/posts', postController.createPost);
router.post('/', postController.createPost);

module.exports = router;