const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function(req, res, cb) {
        cb(null, 'uploads') // where the files would be stored
    },
    filename: function (req, res, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) // 1717210459123
        const ext = path.extname(file.orginalname) // returns .jpg
        cb(null, file.fieldName + '-' + uniqueSuffix + ext) // images-1717210459123-928471829.jpg; file.fieldname → field name from form (e.g. images)
    }
})
const upload = multer({storage: storage})
module.exports = upload