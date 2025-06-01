const multer = require('multer')
const path = require()

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './uploads')
    },
    filename: (req, res, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random * 1E9);
        const extensionName = path.extname(file.orginalname);
        cb(null, file.fieldName + '-' + uniqueSuffix + extensionName)
    } 
})
const upload = multer({storage:storage})
module.exports = upload