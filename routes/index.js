var express = require('express');
var router = express.Router();
var cekPageController = require('../controllers/CekPageController');
var authController = require('../controllers/AuthController');
var homeController = require('../controllers/HomeController');
var postController = require('../controllers/PostController');
var imageController = require('../controllers/ImageController')
var detailController = require('../controllers/getDetailImages')
var {uploadImage} = require('../helpers/multer')

/* GET home page. */
router.get('',homeController.index);
//  function (req, res, next) {
//   res.render('index', { title: 'CSC 317 App', name: "[Luke Thilgen]", header: 'Main Page' });
// });

router.get('/login', function (req, res, next) {
  res.render('login', { title: 'CSC 317 App', header: 'Login Page' });
});

router.get('/detail/:id', function (req, res, next){
  const {id} = req.params
  const data = async ()=>{
    const detailImage = await fetch(`http://localhost:3000/image/${id}`)
    return detailImage
  }
  res.render('detail', { title: 'CSC 317 App', header: `Detail Image with Id = ${id}`})
})
router.get('/image/:id', detailController.getDetailImage)

router.get('/logout', authController.logout);

router.post('/register',authController.register);
router.post('/login',authController.login);
router.post('/post', uploadImage.single('image'), imageController.createPost)
router.get('/images', imageController.getAllImage)

router.get('/registration', function (req, res, next) {
  res.render('registration', { title: 'CSC 317 App', header: 'Register Page' });
});

router.get('/home',homeController.index);

router.get('/postimage',imageController.formPost);

router.get('/viewpost',imageController.viewPost);

router.get('/cek',cekPageController.index);
router.get('/cek_db',cekPageController.cek_db);

module.exports = router;
