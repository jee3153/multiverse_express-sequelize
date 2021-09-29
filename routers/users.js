const express = require('express');
const router = express.Router();
const {
    createUser,
    findAUser,
    findAllUsers,
    deleteUser,
    updateUserInfo
} = require('../controllers/users');

// localhost:3000/users/routerName
router.get('/', (req, res) => {
    findAllUsers(req, res)
})

router.get('/:id', (req, res) => {
    findAUser(req, res);
})

router.post('/', (req, res) => {
    createUser(req, res);
})

router.delete('/:id', (req, res) => {
    deleteUser(req, res);
})

router.put('/:id', (req, res) => {
    updateUserInfo(req, res);
})


module.exports = router;