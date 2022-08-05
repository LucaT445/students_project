const db = require('../helpers/mysqlAdapter')

exports.getAllImage = (req, res)=>{
    db.query(
        `SELECT * FROM images`, (err, result)=>{
            if(err)return res.status(400).json({
                msg : err
            })
            return res.status(200).json({
                msg : "show all images", 
                data : result
            })
        }
    )
}