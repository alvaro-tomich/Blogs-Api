const { User } = require('../database/models');
const { generateJWTToken } = require('../utils/JWTToken');

const createUser = async (displayName, email, password, image) => {
    const user = await User.findOne({
        attributes: ['displayName', 'email'],
        where: { email },
    });

    if (user) return false;

    User.create({ displayName, email, password, image });

    const token = generateJWTToken(JSON.stringify({ displayName, email }));

    return token;
};

const getUsers = () =>
    User.findAll({
        attributes: { exclude: ['password'] },
    });

module.exports = { createUser, getUsers };
