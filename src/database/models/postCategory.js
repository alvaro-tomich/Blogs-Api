const postCategorySchema = (sequelize, dataTypes) => {
    const postCategoryTable = sequelize.define('PostCategory', {
        postId: { type: dataTypes.INTEGER, primaryKey: true },
        categoryId: { type: dataTypes.INTEGER, primaryKey: true }
    }, { timestamps: false });

    postCategoryTable.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            through: postCategoryTable,
            foreignKey: 'postId',
            otherKey: 'categoryId',
            as: 'categories' 
        });

        models.Category.belongsToMany(models.BlogPost, {
            through: postCategoryTable,
            foreignKey: 'categoryId',
            otherKey: 'postId',
            as: 'blogPost' 
        });
    }

    return postCategoryTable;
}

module.exports = postCategorySchema;
