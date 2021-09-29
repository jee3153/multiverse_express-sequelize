module.exports = (sequelize, DataTypes) => {
    const Menu = sequelize.define('Menu', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
            timestamps: false
    });
    return Menu;
}