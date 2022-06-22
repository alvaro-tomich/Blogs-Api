const express = require('express');
const userController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddleware');
const tokenMiddleware = require('../middlewares/tokenMiddleware');

const route = express.Router();

route.post('/user', userMiddleware, userController.createUser);
route.get('/user', tokenMiddleware, userController.getUsers);

module.exports = route;
