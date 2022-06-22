const authService = require('../services/authServices');

const login = async (req, res) => {
    const { email, password } = req.body;
    const token = await authService.login(email, password);

    res.status(200).json({ token }); 
};

module.exports = login;
