/*
Matthew Phillips
15 June 2017
*/

// Printing to the console.
console.log('APP-INFO: Starting App.js...');

// Importing modules.
const fs = require('fs'); // FileSystem
const os = require('os'); // OperatingSystem
const _  = require('lodash'); // Lots of functionality!

const yargs = require('yargs'); // CMD Parsing
const notes = require('./notes.js'); // ./ points to current directory.

const argv = yargs.argv; // Gets arguments.
var command = argv._[0];
// console.log('Command: ', command);
// console.log('Yargs: ' + argv);

if (command == 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('APP-INFO: I successfully created your note.');
    notes.printNote(note);
  } else {
    console.log('APP-INFO: I could not create your note.');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  if (allNotes) {
    console.log('APP-INFO: I found lots of notes. Check them out.');
    console.log(allNotes);
  } else {
    console.log('APP-INFO: You do not appear to have any notes.');
  }
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('APP-INFO: I successfully found your note.');
    notes.printNote(note);
  } else {
    console.log('APP-INFO: I could not find a note with that title.');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ?
    'APP-INFO: I successfully removed your note.' :
    'APP-INFO: I could not remove your note.';
  console.log(message);
} else {
  console.log('Please provide a command. (add|list|read|remove)');
}

// Additional NodeJS Notes.

// console.log(_.isString(true));
// console.log(_.isString('String'));

// var filteredArray = _.uniq([1,1,2]);
// console.log(filteredArray);

// Gets username as String.
// var user = os.userInfo();
// var res  = notes.addNote();
// console.log(res);
// console.log('Result:', notes.add(9, -2));

// Prints the JSON formatted user variable.
// console.log(user);

// Creates a new file called greetings.txt at root file system.
// Adds to the file if the file already exists.

/*
fs.appendFile('greetings.txt', 'Hello ' + user.username + '!', function (err) {
  if (err) {
    console.log('Unable to write to file');
  }
});

// ES5 feature "template strings". Remember the tick marks!
fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}!`, function (err) {
  if (err) {
    console.log('Unable to write to file');
  }
});
*/
