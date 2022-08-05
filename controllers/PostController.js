const db = require('../helpers/mysqlAdapter')

exports.createPost = (req, res)=>{
    const {file = null} = req
    const image = file.path
    const {title, descriptions } = req.body
    db.query(
        `INSERT INTO post (image, title, descriptions) VALUES ("${image}", "${title}", "${descriptions}")`, (err, result)=>{
            if(err)return res.status(400).json({
                msg : err
            })
            return res.status(200).json({
                msg : "Success create post"
            })
        }
    )
}