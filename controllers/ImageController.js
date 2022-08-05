const db = require('../helpers/mysqlAdapter')

exports.createPost = (req, res)=>{
    const {file = null} = req
    const user_id = req.session.user_id
    const image = file.path
    // const created_at = new Date(Date.now())
    const {title, descriptions } = req.body
    db.query(
        `INSERT INTO images (title, link, description, user_id, created_at) VALUES ("${title}", "${image}", "${descriptions}", "${user_id}", now())`, (err, result)=>{
            if(err)return res.status(400).json({
                msg : err
            })
            return res.redirect("/viewpost");
            // return res.status(200).json({
            //     msg : "Success create post"
            // })
        }
    )
}

exports.formPost = (req, res, next) => {
    let loggedIn = false;
    if(req.session.loggedIn){
        loggedIn = true;
    }
    res.render('postimage', { title: 'CSC 317 App', header: 'Post image' ,loggedIn });
}

exports.viewPost =  (req, res, next) => {
    let loggedIn = false;
    if(req.session.loggedIn){
        loggedIn = true;
    }
    res.render('viewpost', { title: 'CSC 317 App', header: 'View Post' ,loggedIn });
  };
  

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
