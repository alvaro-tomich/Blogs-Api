const userSchema = (sequelize, dataTypes) => {
    const userTable = sequelize.define("User", {
        id: { type: dataTypes.INTEGER, primaryKey: true},
        displayName: dataTypes.STRING,
        email: dataTypes.STRING,
        password: dataTypes.STRING,
        image: dataTypes.STRING
    }, { timestamps: false })

    return userTable;
};

module.exports = userSchema;
