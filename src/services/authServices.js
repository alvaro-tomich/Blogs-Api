const { User } = require('../database/models');
const { generateJWTToken } = require('../utils/JWTToken');

const login = async (email, password) => {
    const user = await User.findOne({
        attributes: ['displayName', 'email'],
        where: { email, password },
    });

    const token = generateJWTToken(JSON.stringify(user));
    return token;
};

module.exports = { login };
