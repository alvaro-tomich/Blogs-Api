const validEmail = (email) => /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);

const validNameAndPassword = (name, password) => {
    if (!name || name.length < 8) {
        return { 
            condition: false, message: '"displayName" length must be at least 8 characters long',
        };
    }
    if (!password || password.length < 6) {
        return {
            condition: false, message: '"password" length must be at least 6 characters long',
        };
    }
};

const userMiddleware = (req, res, next) => {
    const { displayName, email, password } = req.body;
    if (!email || !validEmail(email)) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }
    const errorObj = validNameAndPassword(displayName, password);
    if (errorObj && errorObj.condition === false) {
        return res.status(400).json({ message: errorObj.message });
    }

    next();
};

module.exports = userMiddleware;