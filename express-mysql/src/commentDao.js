const mysql = require('mysql');
const db = require('../conf/db');
const tables = require('./tables');
const utils = require('./utils');
const pool = mysql.createPool(db.mysql);

/**
 * Add a comment
 */
const add = (req, res, next) => {
    pool.getConnection(function(err, connection) {

        const param = [req.body.id,
                       req.body.content,
                       req.body.postId,
                       req.body.fromUid, 
                       req.body.toUid];
        
        connection.query(tables.comments.insert, param, function(err, result) {
            if (result) {
                result = utils.msg.SUCCESS_MSG;    
            }

            utils.jsonHelper(res, result);
            connection.release();
        });
    });
};

/**
 * Update a comment
 * 
 * The request must include all elements. So the best way for front end is query
 * first and then update it.
 */
const update = (req, res, next) => {
    if (req.body.id === undefined) {
        utils.jsonHelper(res, utils.msg.INVALID_REQ);
    }

    pool.getConnection(function(err, connection){
        const param = [req.body.content,
                       req.body.postId,
                       req.body.fromUid, 
                       req.body.toUid,
                       req.body.id];
        
        connection.query(tables.comments.update, param, function(err, result) {
            if (result) {
                result = utils.msg.SUCCESS_MSG;    
            }

            utils.jsonHelper(res, result);
            connection.release();
        });
    });
};

/**
 * Delete a comment
 */
const del = (req, res, next) => {
    pool.getConnection(function(err, connection) {
        const id = req.body.id;
        connection.query(tables.comments.delete, id, function(err, result) {
            if (result) {
                result = utils.msg.SUCCESS_MSG;
            }

            utils.jsonHelper(res, result);
            connection.release();
        });
    });
};

/**
 * Query by Id
 */
const queryById = (req, res, next) => {
    pool.getConnection(function(err, connection) {
        const id = req.body.id;
        connection.query(tables.comments.queryById, id, function(err, result) {
            utils.jsonHelper(res, result);
            connection.release();
        });
    });
};

/**
 * Query by postId
 */
const queryByPostId = (req, res, next) => {
    pool.getConnection(function(err, connection) {
        const postId = req.body.postId;
        connection.query(tables.comments.queryByPostId, postId, function(err, result) {
            utils.jsonHelper(res, result);
            connection.release();
        });
    });
};

/**
 * Query all
 */
const queryAll = (req, res, next) => {
    pool.getConnection(function(err, connection) {
        connection.query(tables.comments.queryAll, function(err, result) {
            utils.jsonHelper(res, result);
            connection.release();
        });
    });
};

module.exports = { 
    add: add, 
    update: update,
    delete: del,
    queryById: queryById,
    queryByPostId: queryByPostId,
    queryAll: queryAll
};