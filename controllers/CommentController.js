exports.list = (req,res) => {

    let loggedIn = false;
    if(req.session.loggedIn){
        loggedIn = true;
    }

    const image_id = req.params.id;

    res.render('comment', { title: 'CSC 317 App', name: "[Luke Thilgen]", header: 'Comments',loggedIn });
}