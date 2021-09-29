const { DataTypes } = require('sequelize');
const db = require('./index');

// class User extends Model { }

// User.init(
//     {
//         username: DataTypes.STRING,
//         email: DataTypes.String
//     },
//     {
//         sequelize,
//         timestamps: false
//     }
// );

  
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false
    });
    return User;
};