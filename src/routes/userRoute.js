const express = require('express');
const userController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddleware');

const route = express.Router();

route.post('/user', userMiddleware, userController.createUser);

module.exports = route;
