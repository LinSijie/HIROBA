/**
 * @author Zeyu Chen
 * 
 * MySQL tables
 */
var users = {
	insert:'insert into users(id, username, password, class, email) values(?,?,?,?,?);',
	update:'update users set username=?, password=?, class=?, email=? where id=?;',
	delete: 'delete from users where id=?;',
	queryById: 'select * from users where id=?;',
	queryByUsername: 'select * from users where username=?;',
	queryAll: 'select * from users;'
};

module.exports = users;