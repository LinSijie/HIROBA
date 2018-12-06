const mysql = require('mysql');
const db = require('../conf/db');
const tables = require('./tables');
const utils = require('./utils');
const pool = mysql.createPool(db.mysql);

/**
 * Add a post
 */
const add = (req, res, next) => {
    pool.getConnection(function(err, connection) {

        const param = [req.body.title,
                       req.body.content,
                       req.body.status,
                       req.body.users];
        
        //if (err) throw err;
        connection.query(tables.posts.insert, param, function(err, result) {
            if (result) {
                result = utils.msg.SUCCESS_MSG;    
            }

            utils.jsonHelper(res, result);
            connection.release();
        });
    });
};

/**
 * Update a post
 * 
 * The request must include all elements. So the best way for front end is query
 * first and then update it.
 */
const update = (req, res, next) => {
    if (req.body.id === undefined) {
        utils.jsonHelper(res, utils.msg.INVALID_REQ);
    }

    pool.getConnection(function(err, connection){
        const param = [req.body.title,
                       req.body.content,
                       req.body.status,
                       req.body.users, 
                       req.body.id];
        
        connection.query(tables.posts.update, param, function(err, result) {
            if (result) {
                result = utils.msg.SUCCESS_MSG;    
            }

            utils.jsonHelper(res, result);
            connection.release();
        });
    });
};

/**
 * Delete a post
 */
const del = (req, res, next) => {
    pool.getConnection(function(err, connection) {
        const id = req.body.id;
        connection.query(tables.posts.delete, id, function(err, result) {
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
        connection.query(tables.posts.queryById, id, function(err, result) {
            utils.jsonHelper(res, result);
            connection.release();
        });
    });
};

/**
 * Query by status
 */
const queryByStatus = (req, res, next) => {
    pool.getConnection(function(err, connection) {
        const status = req.body.status;
        connection.query(tables.posts.queryByStatus, status, function(err, result) {
            utils.jsonHelper(res, result);
            connection.release();
        });
    });
};

/**
 * Query by title
 */
const queryByTitle = (req, res, next) => {
    pool.getConnection(function(err, connection) {
        const title = req.body.title;
        connection.query(tables.posts.queryByTitle, title, function(err, result) {
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
        connection.query(tables.posts.queryAll, function(err, result) {
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
    queryByStatus: queryByStatus,
    queryByTitle: queryByTitle,
    queryAll: queryAll
};