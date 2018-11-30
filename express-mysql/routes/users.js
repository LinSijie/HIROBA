var express = require('express');
var router = express.Router();
var userDao = require('../src/userDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Add user. */
router.post('/addUser', function(req, res, next) {
	userDao.add(req, res, next);
});

/* Update user. */
router.post('/updateUser', function(req, res, next) {
	userDao.update(req, res, next);
});

/* Delete user. */
router.post('/delUser', function(req, res, next) {
	userDao.delete(req, res, next);
});

/* Query by Id. */
router.post('/queryById', function(req, res, next) {
	userDao.queryById(req, res, next);
});

/* Query by Username. */
router.post('/queryByUsername', function(req, res, next) {
	userDao.queryByUsername(req, res, next);
});

/* Query All. */
router.post('/queryAll', function(req, res, next) {
	userDao.queryAll(req, res, next);
});

/* Login */
router.post('/login', function(req, res, next){
	userDao.login(req, res, next);
});

/* Logout */
router.post('/logout', function (req, res, next) {
	req.session.username = null; // delete session
	res.redirect('/'); // TODO: change it to msg
});

module.exports = router;
