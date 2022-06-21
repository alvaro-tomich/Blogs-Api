const { User } = require('../database/models');

const login = (email, password) => User.create({ email, password });

module.exports = { login };
