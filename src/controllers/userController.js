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

const getById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getById(id);

    if (!user) {
        return res.status(404).json({ message: 'User does not exist' });
    }

    res.status(200).json(user);
};

const deleteUser = async (_req, res) => {
    const { id } = res.locals.users;
    const deletedUser = await userService.deleteUser(parseInt(id, 10));
    if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(204).end();
};

module.exports = { createUser, getUsers, getById, deleteUser };
