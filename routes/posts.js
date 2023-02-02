const express = require("express");
const router = express.Router();
const postController = require('../controllers/posts');

router.delete('/posts/:id', postController.delete);
router.get('/', postController.getAllPosts);
router.get('/new', postController.createPost);
router.get('/:id', postController.getPost);
router.post('/posts', postController.createPost);
router.post('/', postController.createPost);


module.exports = router;