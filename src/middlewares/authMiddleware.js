const { User } = require('../database/models');

const authMiddleware = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const user = await User.findOne({
        attributes: ['displayName', 'email'],
        where: { email, password },
    });

    if (!user) {
        return res.status(400).json({ message: 'Invalid fields' });
    }

    next();
};

module.exports = authMiddleware;
