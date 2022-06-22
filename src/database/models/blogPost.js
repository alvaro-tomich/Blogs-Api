const blogPostSchema = (sequelize, dataTypes) => {
    const blogsPostTable = sequelize.define('BlogPost', {
        id: { type: dataTypes.INTEGER, primaryKey: true },
        title: dataTypes.STRING(255),
        content: dataTypes.STRING(255),
        userId: { type: dataTypes.INTEGER, foreignKey: true },
        published: dataTypes.DATE,
        updated: dataTypes.DATE
    })

    blogsPostTable.associate = (models) => {
        blogsPostTable.belongsTo(models.User, 
            { foreignKey: 'userId', as: 'user' })
    }

    return blogsPostTable;
};

module.exports = blogPostSchema;
