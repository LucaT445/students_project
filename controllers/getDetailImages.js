const db = require('../helpers/mysqlAdapter')

exports.getDetailImage = (req, res)=>{
    const id = req.params
    db.query(
        `SELECT * FROM images WHERE id = "${id}"`, (err, result)=>{
            if(err)return res.status(400).json({
                msg : err
            })
            return res.status(200).json({ 
                data : result
            })
        }
    )
}