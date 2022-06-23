const verifyFields = (fields) => {
    const situationsArr = [];
    fields.forEach((curr) => {
        if (!curr || typeof curr !== 'string') {
            situationsArr.push(curr);
        }
    });

    return situationsArr;
};

const verifyCategories = (categoryIds) => {
    if (Array.isArray(categoryIds) === false) return false;
    if (!categoryIds || categoryIds.length === 0) {
        return false;
    }

    return true;
};

const postMiddleware = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    const verification = verifyFields([title, content]);
    const verifyCategoryIds = verifyCategories(categoryIds);
    if (verification.length >= 1) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    if (!verifyCategoryIds) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
};

module.exports = postMiddleware;
