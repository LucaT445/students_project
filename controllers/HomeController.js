exports.index = (req,res)=>{

    // console.log(req.session);
    // res.send('HOME')
    let loggedIn = false;
    if(req.session.loggedIn){
         loggedIn = true;
    }
    res.render('index', { title: 'CSC 317 App', name: "[Luke Thilgen]", header: 'Main Page',loggedIn });
}