const router = require('express').Router();
const { getAllUsers, getUser, editUser, me, addDetailUser} = require('../controllers/UserController');
const AuthMiddleware = require('../../../middlewares/AuthMiddleware.js')
router.get('/', AuthMiddleware, getAllUsers);
router.get('/me', AuthMiddleware, me);
router.get('/:id', AuthMiddleware, getUser);
router.patch('/', AuthMiddleware, addDetailUser);
router.patch('/:id', editUser);

module.exports = router;