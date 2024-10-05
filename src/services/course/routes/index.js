const router = require('express').Router();
const { subRiset, addCourse, getAllsubRiset, getsubRiset, getAllCourse, getCourse} = require('../controllers/courseController');
const {fileStorage, multer} = require('../../../utils/fileStorage')




router.post('/subriset', subRiset);
router.get('/subriset', getAllsubRiset);
router.get('/subriset/:id', getsubRiset);
router.post('/subriset/course', multer({storage: fileStorage}).single('thumbnail'), addCourse);
router.get('/', getAllCourse);
router.get('/:id', getCourse);
module.exports = router;