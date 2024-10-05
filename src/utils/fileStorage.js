const multer  = require('multer')


const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/course')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

module.exports =  {
    fileStorage, multer
}