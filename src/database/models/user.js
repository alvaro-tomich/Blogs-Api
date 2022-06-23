const userSchema = (sequelize, dataTypes) => {
    const userTable = sequelize.define("User", {
        id: { type: dataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        displayName: dataTypes.STRING,
        email: { type: dataTypes.STRING, allowNull: false, unique: true },
        password: dataTypes.STRING,
        image: dataTypes.STRING
    }, { timestamps: false })

    userTable.associate = (models) => {
        userTable.hasMany(models.BlogPost, 
            { foreignKey: 'userId', as: 'blogPost' })
    }

    return userTable;
};

module.exports = userSchema;
