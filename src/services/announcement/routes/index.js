const router = require('express').Router();
const { addAnnouncement, getAllAnnouncement, getAnnouncement} = require('../controllers/announcementController');
// const authMiddleware = require("../../../middlewares/AuthMiddleware")

router.post('/', addAnnouncement);
router.get('/', getAllAnnouncement);
router.get('/:id', getAnnouncement);
module.exports = router;