const router = require('express').Router();
const { uploadAssignment, getAllAssignment, getAssignment} = require('../controllers/assignmentControllers');
const authMiddleware = require("../../../middlewares/AuthMiddleware")

router.post('/', authMiddleware, uploadAssignment);
router.get('/', getAllAssignment);
router.get('/:id', getAssignment);
module.exports = router;