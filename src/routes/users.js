const router = require('express').Router();
const {getUsers, getUser, addUser, deleteUser, updateUser, takeBookByUser, returnBookByUser} = require('../controllers/users')

router.get('/', getUsers);

router.get('/:user_id', getUser);

router.post('/', addUser);

router.patch('/:user_id', updateUser);

router.delete('/:user_id', deleteUser);

router.patch('/:user_id/books/take', takeBookByUser);

router.patch('/:user_id/books/return', takeBookByUser);

module.exports = router;