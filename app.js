console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash')
const notes = require('./notes.js');

var res = notes.addNote();
console.log(res);

console.log('Result:', notes.add(3, -68));


// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.\n`, function (err) {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });
