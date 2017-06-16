/*
Matthew Phillips
15 June 2017
*/

console.log('APP-INFO: Starting Notes.js...');

const fs = require('fs');

// Utility: Fetch existing notes
var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {}
  console.log('APP-ERROR: Error while adding notes.');
  return [];
};

// Utility: Saves notes to file
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

/*
Fetches the existing notes and adds the newest.
*/
var addNote = (title, body) => {
  var notes = fetchNotes();
  var note  = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note); // Values are pushed to an array.
    saveNotes(notes);
    return note;
  } else {
    console.log('APP-INFO: Note already exists. Please enter only new notes.');
  }
};

/*
Fetches and returns all notes.
*/
var getAll = () => {
  return fetchNotes();
};

/*
Finds the note specified.
*/
var getNote = (title) => {
  var notes = fetchNotes();
  var retrievedNotes = notes.filter((note) => note.title === title);
  if (notes.length > 0) {
    return retrievedNotes[0];
  }
}

/*
Removes the supplied note from our notes.
*/
var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title != title);
  saveNotes(filteredNotes);
  return (notes.length !== filteredNotes.length);
}

// Prints a note out.
var printNote = (note) => {
  console.log('********************************');
  console.log(`Title: ${note.title}`);
  console.log(`Body:  ${note.body}`);
  console.log('********************************');
}

// Packages and ships out your functions.
module.exports = {
  addNote, // = addNote: addNote
  getAll,
  getNote,
  removeNote,
  printNote
};
