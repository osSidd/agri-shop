const path = require('path')
const multer = require('multer')
const {v4 : uuid} = require('uuid')

function fileUpload(pathname){

    const storage = multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, pathname)
        },
        filename: function(req, file, cb){
            const uniqueSuffix = uuid()
            cb(null, uniqueSuffix + '-' + path.extname(file.originalname))
        }
    })
    
    return multer({storage: storage})    
}


module.exports = fileUpload