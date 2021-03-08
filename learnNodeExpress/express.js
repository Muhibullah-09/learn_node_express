// ````````````````````````````````````````````TOPIC 1 ---> Node.js - Express Framework````````````````````````````````````````````

// Express is a minimal and flexible Node.js web application framework 
// that provides a robust set of features to develop web and mobile applications. 
// It facilitates the rapid development of Node based Web applications. Following
// are some of the core features of Express framework −

//1. Allows to set up middlewares to respond to HTTP Requests.

//2. Defines a routing table which is used to perform different actions based on HTTP Method and URL.

//3. Allows to dynamically render HTML Pages based on passing arguments to templates.

// body-parser : This is a node.js middleware for handling JSON, Raw, Text and URL encoded form data.

// cookie-parser : Parse Cookie header and populate req.cookies with an object keyed by the cookie names.

// multer : This is a node.js middleware for handling multipart/form-data.

//Simple Hello World
// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//    res.send('Hello World from kamali');
// })

// var server = app.listen(8082, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)//after run node express.js go to http://127.0.0.1:8082/
// });


// var express = require('express');
// var app = express();

// // This responds with "Hello World" on the homepage
// app.get('/', function (req, res) {
//    console.log("Got a GET request for the homepage");
//    res.send('Hello GET');
// })

// // This responds a POST request for the homepage
// app.post('/', function (req, res) {
//    console.log("Got a POST request for the homepage");
//    res.send('Hello POST');
// })

// // This responds a DELETE request for the /del_user page.
// app.delete('/del_user', function (req, res) {
//    console.log("Got a DELETE request for /del_user");
//    res.send('Hello DELETE');
// })

// // This responds a GET request for the /list_user page.
// app.get('/list_user', function (req, res) {
//    console.log("Got a GET request for /list_user");
//    res.send('Page Listing');
// })

// // This responds a GET request for abcd, abxcd, ab123cd, and so on
// app.get('/ab*cd', function(req, res) {   
//    console.log("Got a GET request for /ab*cd");
//    res.send('Page Pattern Match');
// })

// var server = app.listen(8083, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// });



//For user API

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/users' , require('./api/userAPI'));

app.listen(3000, () =>{
    console.log('Server started on 3000')
}); 