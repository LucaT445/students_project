const db = require('../helpers/mysqlAdapter')

exports.createPost = (req, res)=>{
    const {file = null} = req
    const user_id = req.session.id
    const image = file.path
    const created_at = new Date(Date.now())
    const {title, descriptions } = req.body
    db.query(
        `INSERT INTO images (title, link, description, user_id, created_at) VALUES ("${title}", "${image}", "${descriptions}", "${user_id}", "${created_at}")`, (err, result)=>{
            if(err)return res.status(400).json({
                msg : err
            })
            return res.status(200).json({
                msg : "Success create post"
            })
        }
    )
}