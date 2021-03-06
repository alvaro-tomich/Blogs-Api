const categorySchema = (sequelize, dataTypes) => {
    const categoryTable = sequelize.define('Category', {
        id: { type: dataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: dataTypes.STRING(255)
    }, { timestamps: false })

    return categoryTable;
}

module.exports = categorySchema;
