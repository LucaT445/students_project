var express = require('express');
var router = express.Router();
var cekPageController = require('../controllers/CekPageController');
var authController = require('../controllers/AuthController');
var homeController = require('../controllers/HomeController');

/* GET home page. */
router.get('',homeController.index);
//  function (req, res, next) {
//   res.render('index', { title: 'CSC 317 App', name: "[Luke Thilgen]", header: 'Main Page' });
// });

router.get('/login', function (req, res, next) {
  res.render('login', { title: 'CSC 317 App', header: 'Login Page' });
});

router.get('/logout', authController.logout);

router.post('/register',authController.register);
router.post('/login',authController.login);


router.get('/registration', function (req, res, next) {
  res.render('registration', { title: 'CSC 317 App', header: 'Register Page' });
});

router.get('/home',homeController.index);

router.get('/postimage', function (req, res, next) {
  res.render('postimage', { title: 'CSC 317 App', header: 'Post image' });
});

router.get('/viewpost', function (req, res, next) {
  res.render('viewpost', { title: 'CSC 317 App', header: 'View Post' });
});

router.get('/cek',cekPageController.index);
router.get('/cek_db',cekPageController.cek_db);

module.exports = router;
