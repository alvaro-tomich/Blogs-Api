const express = require('express');
const postController = require('../controllers/postController');
const tokenMiddleware = require('../middlewares/tokenMiddleware');
const postMiddleware = require('../middlewares/postMiddleware');

const route = express.Router();

route.post('/post', tokenMiddleware, postMiddleware, postController.createPost);
route.get('/post', tokenMiddleware, postController.getPosts);
route.get('/post/:id', tokenMiddleware, postController.getPostById);
route.put('/post/:id', tokenMiddleware, postController.updatePost);
route.delete('/post/:id', tokenMiddleware, postController.deletePost);

module.exports = route;
