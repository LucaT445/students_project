
var db = require('../helpers/mysqlAdapter')
exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

exports.cek_db =  (req,res) => {

    const users = db.query('SELECT * FROM users',(err, results, fields)=>{
        console.log(results)
    });
    res.send("TEST DB");
}