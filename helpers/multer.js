const multer = require('multer')
const path = require("path")

const storage = multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, './public/images')
        },
        filename : (req, file, cb)=>{
            const suffix = `${Date.now()}`
            const filename = `${file.fieldname}-${suffix}${path.extname(file.originalname)}`
            cb(null, filename)
        }
})

const limit = {
    fileSize : 3e6
}

const imageOnlyFilter = (req, file, cb)=>{
    const extName = path.extname(file.originalname)
    const allowedExt = /jpg|png/
    if(!allowedExt.test(extName))
    return cb(new Error("Please insert jpg or png only"), false)
    cb(null, true)
}
const uploadImage = multer({
    storage,
    limits : limit,
    fileFilter : imageOnlyFilter
})

module.exports = {
    uploadImage
}