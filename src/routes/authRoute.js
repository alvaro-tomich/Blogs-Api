const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const route = express.Router();

route.post('/login', authMiddleware, authController);

module.exports = route;
