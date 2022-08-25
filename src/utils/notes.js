const Note = require("../db/noteModel");
const chalk = require("chalk");

exports.addNote = async (myNote) => {
  try {
    await Note.create({ note: myNote });
    console.log(
      chalk.green(`
    Added new note: ${myNote}
    `)
    );
  } catch (error) {
    console.log(error);
  }
};
