const fs = require("fs");

const addNote = (myNote) => {
  const allNotes = loadNotes();
  allNotes.push({ reminder: myNote });
  saveNotes(allNotes);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("src/notes.json");
    const notesJson = dataBuffer.toString();
    return JSON.parse(notesJson);
  } catch (error) {
    return [];
  }
};

const saveNotes = (allNotes) => {
  const notesJson = JSON.stringify(allNotes);
  fs.writeFileSync("src/notes.json", notesJson);
};

const listNotes = () => {
  const allNotes = loadNotes();
  allNotes.map((note, index) => {
    console.log(`${index + 1}. ${note.reminder}`);
  });
};

const removeNote = (noteToDelete) => {
  const allNotes = loadNotes();
  const notesToKeep = allNotes.filter((note) => {
    return note.reminder != noteToDelete;
  });
  saveNotes(notesToKeep);
};

module.exports = {
  addNote,
  listNotes,
  removeNote,
};
