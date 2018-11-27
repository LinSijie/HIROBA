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

module.exports = { 
	add: add
};