const router = require('express').Router();
const { getSetting, addSetting} = require('../controllers/settingController');
// const AuthMiddleware = require('../../../middlewares/AuthMiddleware.js')
router.get('/',  getSetting);
router.post('/', addSetting);

module.exports = router;