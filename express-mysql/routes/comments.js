const express = require('express');
const router = express.Router();
const commentDao = require('../src/commentDao');

/* Add comment. */
router.post('/addComment', function(req, res, next) {
	commentDao.add(req, res, next);
});

/* Update comment */
router.post('/updateComment', function(req, res, next) {
    commentDao.update(req, res, next);
});

/* Delete comment */
router.post('/deleteComment', function(req, res, next) {
    commentDao.delete(req, res, next);
});

/* Query by Id */
router.post('/queryById', function(req, res, next) {
    commentDao.queryById(req, res, next);
});

/* Query by postId */
router.post('/queryByPostId', function(req, res, next) {
    commentDao.queryByPostId(req, res, next);
});

/* Query all */
router.post('/queryAll', function(req, res, next) {
    commentDao.queryAll(req, res, next);
});

module.exports = router;