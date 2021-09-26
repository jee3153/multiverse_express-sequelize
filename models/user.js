const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index');

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
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
    });
    return User;
};