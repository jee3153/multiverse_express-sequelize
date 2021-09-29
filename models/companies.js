  
module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        logoUrl: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
        });

    return Company;
};