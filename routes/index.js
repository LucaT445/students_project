var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('', function (req, res, next) {
  res.render('index', { title: 'CSC 317 App', name: "[Luke Thilgen]", header: 'Main Page' });
});

router.get('/login', function (req, res, next) {
  res.render('login', { title: 'CSC 317 App', header: 'Login Page' });
});

router.get('/registration', function (req, res, next) {
  res.render('registration', { title: 'CSC 317 App', header: 'Register Page' });
});


router.get('/postimage', function (req, res, next) {
  res.render('postimage', { title: 'CSC 317 App', header: 'Post image' });
});

router.get('/viewpost', function (req, res, next) {
  res.render('viewpost', { title: 'CSC 317 App', header: 'View Post' });
});

module.exports = router;
