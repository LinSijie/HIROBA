/**
 * 
 * MySQL tables
 */
const users = {
	insert:'insert into users(id, username, password, class, email) values(?,?,?,?,?);',
	update:'update users set username=?, password=?, class=?, email=? where id=?;',
	delete: 'delete from users where id=?;',
	queryById: 'select * from users where id=?;',
	queryByUsername: 'select * from users where username=?;',
	queryAll: 'select * from users;'
};

const posts = {
	insert:'insert into posts(title, content, status, users) values(?,?,?,?);',
	update:'update posts set title=?, content=?, status=?, users=? where id=?;',
	delete: 'delete from posts where id=?;',
	queryById: 'select * from posts where id=?;',
	queryByStatus: 'select * from posts where status=?;',
	queryByTitle: 'select * from posts where title=?;',
	queryAll: 'select * from posts;'
}

const comments = {
	insert:'insert into comments(content, postId, fromUid, toUid) values(?,?,?,?);',
	update:'update comments set content=?, postId=?, fromUid=?, toUid=? where id=?;',
	delete: 'delete from comments where id=?;',
	queryById: 'select * from comments where id=?;',
	queryByPostId: 'select * from comments where postId=?;',
	queryAll: 'select * from comments;'
}

module.exports = {
	users: users,
	posts: posts,
	comments: comments
};