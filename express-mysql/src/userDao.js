const mysql = require('mysql');
const db = require('../conf/db');
const tables = require('./tables');
const utils = require('./utils');
const pool = mysql.createPool(db.mysql);

/**
 * Add a user
 */
const add = (req, res, next) => {
	pool.getConnection(function(err, connection) {

		const param = [req.body.id, 
										req.body.username, 
										req.body.password, 
										req.body.class, 
										req.body.email];

		if (err) throw err;
		connection.query(tables.users.insert, param, function(err, result) {
			if (result) {
				result = utils.msg.SUCCESS_MSG;    
			}

			utils.jsonHelper(res, result);
			connection.release();
		});
	});
};

/**
 * Update a user
 * 
 * The request must include all elements. So the best way for front end is query
 * first and then update it.
 */
const update = (req, res, next) => {
	if (req.body.id === undefined) {
		utils.jsonHelper(res, undefined);
	}

	pool.getConnection(function(err, connection){
		const param = [req.body.username, 
					   req.body.password, 
					   req.body.class, 
					   req.body.email,
					   req.body.id];
		
		connection.query(tables.users.update, param, function(err, result) {
			if (result) {
				result = utils.msg.SUCCESS_MSG;    
			}

			utils.jsonHelper(res, result);
			connection.release();
		});
	});
};

/**
 * Delete a user
 */
const del = (req, res, next) => {
	pool.getConnection(function(err, connection) {
		const id = req.body.id;
		connection.query(tables.users.delete, id, function(err, result) {
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
		connection.query(tables.users.queryById, id, function(err, result) {
			utils.jsonHelper(res, result);
			connection.release();
		});
	});
};

/**
 * Query by username
 */
const queryByUsername = (req, res, next) => {
	pool.getConnection(function(err, connection) {
		const username = req.body.username;
		connection.query(tables.users.queryUsername, username, function(err, result) {
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
		connection.query(tables.users.queryAll, function(err, result) {
			utils.jsonHelper(res, result);
			connection.release();
		});
	});
};

/**
 * Login
 */
const login = (req, res, next) => {
	pool.getConnection(function(err, connection) {
		const username = req.body.username;
		connection.query(tables.users.queryByUsername, username, function(err, result) {
			if (result) {
				let [ userInfo ] = result;
				if (userInfo.password === req.body.password) {
					req.session.username = req.body.username; // success, setup session

					result = utils.msg.SUCCESS_MSG;
				} else {
					result = utils.msg.INVALID_PWD;
				}
			} else {
				result = utils.msg.INVALID_USER;
			}
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
	queryByUsername: queryByUsername,
	queryAll: queryAll,
	login: login
};