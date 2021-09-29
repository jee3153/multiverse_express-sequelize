const { User } = require('../models/index')

const createUser = async (req, res) => {
    const { username, age } = req.body;
    const user = await User.create({
        username,
        age
    });
    await res.send(user);
}

const findAUser = async (req, res) => { 

    const { id } = req.params;
    const user = await User.findAll({
        where: {
            id
        }
    });

    if (user.length === 0) return res.send('User does not exist.')
    
    await res.send(user);

}

const findAllUsers = async (req, res) => {
    const users = await User.findAll();

    await res.send(users);

}

const updateUserInfo = async (req, res) => {
    const { id } = req.params;
    await User.update(req.body, {
        where: {
            id
        }
    });

    await res.send('User updated.');
}

const deleteUser = async (req, res) => {

    const { id } = req.params;
    await User.destroy({
        where: {
            id
        }
    })
    await res.send('User deleted.');
}
module.exports = { createUser, findAUser, findAllUsers, deleteUser, updateUserInfo };