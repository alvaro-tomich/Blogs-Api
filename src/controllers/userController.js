const userService = require('../services/userServices');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const createUserAndToken = await userService.createUser(displayName, email, password, image);
    if (!createUserAndToken) {
        return res.status(409).json({ message: 'User already registered' });
    }
    
    res.status(201).json({ token: createUserAndToken });
};

const getUsers = async (_req, res) => {
    const users = await userService.getUsers();

    res.status(200).json(users);
};

module.exports = { createUser, getUsers };
