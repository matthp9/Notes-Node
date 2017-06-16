/*
Matthew Phillips
15 June 2017
*/
// Importing modules.
const fs = require('fs'); // FileSystem
const os = require('os'); // OperatingSystem
const _  = require('lodash'); // Lots of functionality!

const yargs = require('yargs'); // CMD Parsing
const notes = require('./notes.js'); // ./ points to current directory.

const yargsTitle = {
  describe: 'Title of note.',
  demand: true,
  alias: 't'
};

const yargsBody = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
        .command('add', 'Let me add a new note for you!', {
          title: yargsTitle,
          body: yargsBody
        })
        .command('list', 'I will list all of your notes.')
        .command('read', 'Read a specific note of yours.', {
          title: yargsTitle
        })
        .command('remove', 'I will remove a note for you.', {
          title: yargsTitle
        })
        .help()
        .argv; // Gets arguments.

var command = argv._[0]; // Gets procedure.

if (command == 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('I successfully created your note.');
    notes.printNote(note);
  } else {
    console.log('I could not create your note.');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  if (allNotes) {
    console.log(`I found lots of notes. ${allNotes.length},
      as a matter of fact. Check them out.`);
    allNotes.forEach((note) => notes.printNote(note));
  } else {
    console.log('You do not appear to have any notes.');
  }
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('I successfully found your note.');
    notes.printNote(note);
  } else {
    console.log('I could not find a note with that title.');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ?
    'I successfully removed your note.' :
    'I could not remove your note.';
  console.log(message);
} else {
  console.log('Please provide a command. (add|list|read|remove)');
}
