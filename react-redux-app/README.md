This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Front End
react + redux, ant design

### How to test

login page: http://localhost:3001/login

register page: http://localhost:3001/register

course page: http://localhost:3001/course

course page - new post: http://localhost:3001/course/newpost

### TODO:

#### redux

state: 

user (code, error, isLoading)

post (nextId, data, error, isLoading)

posts (data, error, isLoading)

comment (nextId, data, currId, error, isLoading)

#### login page
~~header: menu bar (item1: icon)~~

~~content: "Welcome to HIROBA" + form component(log in)~~

~~footer: "HIROBA ©2018 Created by LSJ"~~

#### register page
~~header: menu bar (item1: icon)~~

~~content: form component(register)~~

~~footer: "HIROBA ©2018 Created by LSJ"~~

#### course page 
header: menu bar(item1: icon, item2: course name, item3:user name, item4: LOGOUT button)

~~sider: new post button + list of posts(username, title, status, date)~~

~~content:~~

~~course bulletin board when no post is selected~~

contents of selected posts (id, title, content, status, users, date) + contents of comments(id, content, from_uid, to_uid, date) + form component (add new comment)

~~form component (add new post)~~

~~footer: "HIROBA ©2018 Created by LSJ"~~

#### debug

