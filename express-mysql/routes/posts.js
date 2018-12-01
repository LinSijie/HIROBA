const express = require('express');
const router = express.Router();
const postDao = require('../src/postDao');

/* Add comment. */
router.post('/addPost', function(req, res, next) {
	postDao.add(req, res, next);
});

/* Update comment */
router.post('/updatePost', function(req, res, next) {
    postDao.update(req, res, next);
});

/* Delete comment */
router.post('/deletePost', function(req, res, next) {
    postDao.delete(req, res, next);
});

/* Query by Id */
router.post('/queryById', function(req, res, next) {
    postDao.queryById(req, res, next);
});

/* Query by status */
router.post('/queryByStatus', function(req, res, next) {
    postDao.queryByStatus(req, res, next);
});

/* Query by title */
router.post('/queryByTitle', function(req, res, next) {
    postDao.queryByStatus(req, res, next);
});

/* Query all */
router.post('/queryAll', function(req, res, next) {
    postDao.queryAll(req, res, next);
});

module.exports = router;