// ````````````````````````````````````````````TOPIC 1 ---> Introduction````````````````````````````````````````````
// Hello World! program in Node.js 
// console.log("Hello World!");

// ````````````````````````````````````````````TOPIC 2 ---> First Application````````````````````````````````````````````
// Before creating an actual "Hello, World!" application using Node.js, 
// let us see the components of a Node.js application. A Node.js 
// application consists of the following three important components −

// Import required modules − We use the require directive to load Node.js modules.

// Create server − A server which will listen to client's requests similar to Apache HTTP Server.

// Read request and return response − The server created in an earlier step will 
// read the HTTP request made by the client which can be a browser or a console and return the response.

// Step 1 - Import Required Module
// We use the require directive to load the http module and store the returned HTTP 
// instance into an http variable as follows −
// var http = require('http');

// Step 2 - Create Server
// We use the created http instance and call http.createServer() method 
// to create a server instance and then we bind it at port 8081 using the 
// listen method associated with the server instance. Pass it a function with
//  parameters request and response. Write the sample implementation to always return "Hello World".
// http.createServer(function (request, response) {
// Send the HTTP header 
// HTTP Status: 200 : OK
// Content Type: text/plain
// response.writeHead(200, {'Content-Type': 'text/plain'});

// Send the response body as "Hello World"
//     response.end('Hello World From Kamali\n');
//  }).listen(8081);

// Console will print the message
//  console.log('Server running at http://127.0.0.1:8081/');

// ````````````````````````````````````````````TOPIC 3 ---> REPL Terminal````````````````````````````````````````````

// REPL stands for Read Eval Print Loop and it represents a computer environment 
// like a Windows console or Unix/Linux shell where a command is entered and the 
// system responds with an output in an interactive mode. Node.js or Node comes
// bundled with a REPL environment. It performs the following tasks −

// Read − Reads user's input, parses the input into JavaScript data-structure, and stores in memory.

// Eval − Takes and evaluates the data structure.

// Print − Prints the result.

// Loop − Loops the above command until the user presses ctrl-c twice.

// The REPL feature of Node is very useful in experimenting with Node.js 
// codes and to debug JavaScript codes.

// ````````````````````````````````````````````TOPIC 4 ---> Callbacks Concept````````````````````````````````````````````

// What is Callback?
// Callback is an asynchronous equivalent for a function. A callback function is 
// called at the completion of a given task. Node makes heavy use of callbacks. 
// All the APIs of Node are written in such a way that they support callbacks.
// For example, a function to read a file may start reading file and return 
// the control to the execution environment immediately so that the next instruction
// can be executed. Once file I/O is complete, it will call the callback 
// function while passing the callback function, the content of the file as a 
// parameter. So there is no blocking or wait for File I/O. This makes Node.js 
// highly scalable, as it can process a high number of requests without waiting 
// for any function to return results.

// Blocking Code Example
// var fs = require("fs");
// var data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log("Program Ended");

// Non-Blocking Code Example
// var fs = require("fs");

// fs.readFile('input.txt', function (err, data) {
//    if (err) return console.error(err);
//    console.log(data.toString());
// });

// console.log("Program Ended");

// These two examples explain the concept of blocking and non-blocking calls.

// The first example shows that the program blocks until it reads the file and 
// then only it proceeds to end the program.
// The second example shows that the program does not wait for file 
// reading and proceeds to print "Program Ended" and at the same time, 
// the program without blocking continues reading the file.

// Thus, a blocking program executes very much in sequence. 
// From the programming point of view, it is easier to implement the 
// logic but non-blocking programs do not execute in sequence. 
// In case a program needs to use any data to be processed, it 
// should be kept within the same block to make it sequential execution.

// ````````````````````````````````````````````TOPIC 5 ---> Node.js - Event Loop````````````````````````````````````````````

// Node.js is a single-threaded application, but it can support concurrency 
// via the concept of event and callbacks. Every API of Node.js is asynchronous 
// and being single-threaded, they use async function calls to maintain 
// concurrency. Node uses observer pattern. Node thread keeps an event 
// loop and whenever a task gets completed, it fires the corresponding 
// event which signals the event-listener function to execute.

// Event-Driven Programming:
// Node.js uses events heavily and it is also one of the reasons why Node.js 
// is pretty fast compared to other similar technologies. As soon as Node 
// starts its server, it simply initiates its variables, declares functions 
// and then simply waits for the event to occur.In an event-driven application, 
// there is generally a main loop that listens for events, and then triggers 
// a callback function when one of those events is detected.
// Although events look quite similar to callbacks, the difference lies 
// in the fact that callback functions are called when an asynchronous function 
// returns its result, whereas event handling works on the observer pattern. 
// The functions that listen to events act as Observers. Whenever an event 
// gets fired, its listener function starts executing. Node.js has multiple 
// in-built events available through events module and EventEmitter class 
// which are used to bind events and event-listeners as follows −

// // Import events module
// var events = require('events');

// // Create an eventEmitter object
// var eventEmitter = new events.EventEmitter();

// // Create an event handler as follows
// var connectHandler = function connected() {
//     console.log('connection succesful.');

//     // Fire the data_received event 
//     eventEmitter.emit('data_received');
// }

// // Bind the connection event with the handler
// eventEmitter.on('connection', connectHandler);

// // Bind the data_received event with the anonymous function
// eventEmitter.on('data_received', function () {
//     console.log('data received succesfully by 0');
// });

// // Bind the data_received event with the anonymous function
// eventEmitter.on('data_received', function () {
//     console.log('data received succesfully by 1');
// });

// // Bind the data_received event with the anonymous function
// eventEmitter.on('data_received', function () {
//     console.log('data received succesfully by 2');
// });

// // Bind the data_received event with the anonymous function
// eventEmitter.on('data_received', function () {
//     console.log('data received succesfully by 3');
// });

// // Bind the data_received event with the anonymous function
// eventEmitter.on('data_received', function () {
//     console.log('data received succesfully by 4');
// });

// // Bind the data_received event with the anonymous function
// eventEmitter.on('data_received', function () {
//     console.log('data received succesfully by 5');
// });

// // Bind the data_received event with the anonymous function
// eventEmitter.on('data_received', function () {
//     console.log('data received succesfully by 6');
// });

// // Bind the data_received event with the anonymous function
// eventEmitter.on('data_received', function () {
//     console.log('data received succesfully by 7');
// });

// // Bind the data_received event with the anonymous function
// eventEmitter.on('data_received', function () {
//     console.log('data received succesfully by 8');
// });

// // Bind the data_received event with the anonymous function
// eventEmitter.on('data_received', function () {
//     console.log('data received succesfully by 9');
// });

// // Bind the data_received event with the anonymous function
// eventEmitter.on('data_received', function () {
//     console.log('data received succesfully by 10');
// });

// // Bind the data_received event with the anonymous function
// eventEmitter.on('data_received', function () {
//     console.log('data received succesfully by 11');
// });

// Fire the connection event 
// eventEmitter.emit('connection');
// eventEmitter.emit('data_received');

// console.log("Program Ended.");

// How Node Applications Work?
// In Node Application, any async function accepts a callback as 
// the last parameter and a callback function accepts an error as 
// the first parameter. Let's revisit the previous example again. 
// Create a text file named input.txt with the following content.

// var fs = require("fs");

// fs.readFile('input.txt', function (err, data) {
//    if (err) {
//       console.log(err.stack);
//       return;
//    }
//    console.log(data.toString());
// });
// console.log("Program Ended");

// Here fs.readFile() is a async function whose purpose is to 
// read a file. If an error occurs during the read operation, 
// then the err object will contain the corresponding error, 
// else data will contain the contents of the file. readFile 
// passes err and data to the callback function after the read 
// operation is complete, which finally prints the content.

// ````````````````````````````````````````````TOPIC 6 ---> Node.js - Event Emitter````````````````````````````````````````````

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// // listener #1
// var listner1 = function listner1() {
//     console.log('listner1 executed.');
// }

// // listener #2
// var listner2 = function listner2() {
//     console.log('listner2 executed.');
// }

// // Bind the connection event with the listner1 function
// eventEmitter.addListener('connection', listner1);

// // Bind the connection event with the listner2 function
// eventEmitter.on('connection', listner2);

// var eventListeners = require('events').EventEmitter.listenerCount
//     (eventEmitter, 'connection');
// console.log(eventListeners + " Listner(s) listening to connection event");

// // Fire the connection event 
// eventEmitter.emit('connection');

// // Remove the binding of listner1 function
// eventEmitter.removeListener('connection', listner1);
// console.log("Listner1 will not listen now.");

// // Fire the connection event 
// eventEmitter.emit('connection');

// eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
// console.log(eventListeners + " Listner(s) listening to connection event");

// console.log("Program Ended.");

// ````````````````````````````````````````````TOPIC 7 ---> Node.js - Buffers````````````````````````````````````````````
// The Buffer class in Node. js is designed to handle raw 
// binary data. Each buffer corresponds to some raw memory 
// allocated outside V8. Buffers act somewhat like arrays of 
// integers, but aren't resizable and have a whole bunch of 
// methods specifically for binary data.

// buf = new Buffer(256);
// len = buf.write("Simply Easy Learning1234567891");
// var json = buf.toJSON(buf);

// //convert buffer into json
// console.log(json);
// console.log("Octets written : "+  len);

// buf = new Buffer(26);
// for (var i = 0 ; i < 26 ; i++) {
//   buf[i] = i + 97;
// }

// console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
// console.log( buf.toString('ascii',0,5));   // outputs: abcde
// console.log( buf.toString('utf8',0,5));    // outputs: abcde
// console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

// ````````````````````````````````````````````TOPIC 8 ---> Node.js - Streams````````````````````````````````````````````

// What are Streams?
// Streams are objects that let you read data from a source or 
// write data to a destination in continuous fashion. In Node.js, 
// there are four types of streams −

// Readable − Stream which is used for read operation.

// Writable − Stream which is used for write operation.

// Duplex − Stream which can be used for both read and write operation.

// Transform − A type of duplex stream where the output is computed based on input.

// Each type of Stream is an EventEmitter instance and throws 
// several events at different instance of times. For example, 
// some of the commonly used events are −

// data − This event is fired when there is data is available to read.

// end − This event is fired when there is no more data to read.

// error − This event is fired when there is any error receiving or writing data.

// finish − This event is fired when all the data has been flushed to underlying system.

// This tutorial provides a basic understanding of the commonly used operations on Streams.

// 1. Reading from a Stream

// var fs = require("fs");
// var data = '';

// // Create a readable stream
// var readerStream = fs.createReadStream('input.txt');

// // Set the encoding to be utf8. 
// readerStream.setEncoding('UTF8');

// // Handle stream events --> data, end, and error
// readerStream.on('data', function(chunk) {
//    data += chunk;
// });

// readerStream.on('end',function() {
//    console.log(data);
// });

// readerStream.on('error', function(err) {
//    console.log(err.stack);
// });

// console.log("Program Ended");

// 2. Writing to a Stream

// var fs = require("fs");
// var data = 'Simply Easy Learning';

// // Create a writable stream
// var writerStream = fs.createWriteStream('output.txt');

// // Write the data to stream with encoding to be utf8
// writerStream.write(data,'UTF8');

// // Mark the end of file
// writerStream.end();

// // Handle stream events --> finish, and error
// writerStream.on('finish', function() {
//    console.log("Write completed.");
// });

// writerStream.on('error', function(err) {
//    console.log(err.stack);
// });

// console.log("Program Ended");

// 3. Piping the Streams
// Piping is a mechanism where we provide the output of one stream as 
// the input to another stream. It is normally used to get data from 
// one stream and to pass the output of that stream to another stream. 
// There is no limit on piping operations. Now we'll show a piping example 
// for reading from one file and writing it to another file.

// var fs = require("fs");

// // Create a readable stream
// var readerStream = fs.createReadStream('input.txt');

// // Create a writable stream
// var writerStream = fs.createWriteStream('outputSecond.txt');

// // Pipe the read and write operations
// // read input.txt and write data to output.txt
// readerStream.pipe(writerStream);

// console.log("Program Ended");

// ````````````````````````````````````````````TOPIC 8 ---> Node.js - File System````````````````````````````````````````````

// var fs = require("fs");

// // Asynchronous read
// fs.readFile('input.txt', function (err, data) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("Asynchronous read: " + data.toString());
// });

// // Synchronous read
// var data = fs.readFileSync('input.txt');
// console.log("Synchronous read: " + data.toString());

// console.log("Program Ended");
// console.log( __filename );
// console.log( __dirname );

// ````````````````````````````````````````````TOPIC 9 ---> Node.js - Web Module````````````````````````````````````````````

// Node.js provides an http module which can be used to create 
// an HTTP client of a server. Following is the bare minimum 
// structure of the HTTP server which listens at 8081 port.

// var http = require('http');
// var fs = require('fs');
// var url = require('url');

// // Create a server
// http.createServer( function (request, response) {  
//    // Parse the request containing file name
//    var pathname = url.parse(request.url).pathname;
   
//    // Print the name of the file for which request is made.
//    console.log("Request for " + pathname + " received.");
   
//    // Read the requested file content from file system
//    fs.readFile(pathname.substr(1), function (err, data) {
//       if (err) {
//          console.log(err);
         
//          // HTTP Status: 404 : NOT FOUND
//          // Content Type: text/plain
//          response.writeHead(404, {'Content-Type': 'text/html'});
//       } else {	
//          //Page found	  
//          // HTTP Status: 200 : OK
//          // Content Type: text/plain
//          response.writeHead(200, {'Content-Type': 'text/html'});	
         
//          // Write the content of the file to response body
//          response.write(data.toString());		
//       }
      
//       // Send the response body 
//       response.end();
//    });   
// }).listen(8082);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8082/');