  
module.exports = (sequelize, DataTypes) => {
    const Location = sequelize.define('Location', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        manager: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    });
    return Location;
};