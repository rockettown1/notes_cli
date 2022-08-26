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

exports.listNotes = async () => {
  try {
    const list = await Note.find({});

    for (let i = 0; i < list.length; i++) {
      console.log(`${chalk.green(i + 1)}: ${list[i].note}`);
    }
  } catch (error) {
    console.log(error);
  }
};
