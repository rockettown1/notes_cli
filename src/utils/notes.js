const Note = require("../db/noteModel");
const chalk = require("chalk");
const inquirer = require("inquirer");

exports.addNote = async () => {
  //Question for adding a note
  const addQuestion = [
    {
      type: "input",
      name: "add",
      message: "What would you like to add? (type your note and hit enter):",
    },
  ];

  const answer = await inquirer.prompt(addQuestion);
  const myNote = answer.add;

  try {
    await Note.create({ note: myNote });
    console.log(
      chalk.green(`
		Added new note: ${myNote}
		`)
    );
  } catch (error) {
    console.log("error in addNote function");
    console.log(error);
  }
};

exports.listNote = async () => {
  try {
    let list = await Note.find({});
    if (list.length < 1) {
      console.log("You currently have no notes");
      return list.length;
    } else {
      console.log(chalk.blue.bold("Listing all Notes:"));
      // console.log(chalk.green(list.map(value => value.note)));
      for (let i = 0; i < list.length; i++) {
        console.log(chalk.green(`${i + 1}) ${list[i].note}`));
      }
    }

    return list.length;
  } catch (error) {
    console.log("error in listNote function");
    console.log(error);
  }
};

exports.deleteNote = async () => {
  // Question for deleting note
  const deleteQuestion = [
    {
      type: "input",
      name: "delete",
      message:
        "Which note would you like to delete? (type the notes number and hit enter):",
    },
  ];

  const answer = await inquirer.prompt(deleteQuestion);
  const myIndex = parseFloat(answer.delete);

  try {
    let list = await Note.find({});
    if (myIndex > list.length || myIndex <= 0) {
      if (list.length > 1) {
        console.log(
          chalk.red.bold(
            `Sorry there is no note number ${myIndex}, there are only ${list.length} notes`
          )
        );
      } else {
        console.log(
          chalk.red.bold(
            `Sorry there is no note number ${myIndex}, there is only ${list.length} note!`
          )
        );
      }
    } else if (
      myIndex <= list.length &&
      myIndex > 0 &&
      Number.isInteger(myIndex)
    ) {
      console.log(chalk.red.bold(`\n${list[myIndex - 1].note} was removed\n`));
      return await Note.deleteOne(list[myIndex - 1]);
    } else {
      if (list.length > 1 && Number.isInteger(myIndex)) {
        console.log(
          chalk.red.bold(`Choose a whole number between 1 - ${list.length}`)
        );
      } else if (typeof myIndex === "string") {
        console.log(chalk.red.bold(`Whole number expected!`));
      } else {
        console.log(chalk.red.bold(`Whole number expected!`));
      }
    }
  } catch (error) {
    console.log("error in listNote function");
    console.log(error);
  }
};

exports.updateNote = async () => {
  // create array of all options
  let list = await Note.find({});
  let noteList = await list.map((value) => value.note);
  // Question1 for updating note
  const question1 = [
    {
      type: "rawlist",
      name: "update",
      message:
        "Which note would you like to update? (type the notes number and hit enter):",
      choices: noteList,
    },
  ];

  // Question2 for updating note
  const question2 = [
    {
      type: "input",
      name: "update",
      message:
        "What would you like to update your note to? (type your new note and hit enter):",
    },
  ];

  try {
    let noteNumber = await this.listNote();
    if (noteNumber > 0) {
      let answerup = await inquirer.prompt(question1);
      let oldNote = answerup.update;
      console.log(`You are choosing to update ${oldNote}`);

      const answer2 = await inquirer.prompt(question2);

      let newNote = { note: answer2.update };
      let oldNote2 = { note: oldNote };
      await Note.updateOne(oldNote2, newNote);
      console.log(
        chalk.green.bold(
          `Updated note to "${answer2.update}"
				`
        )
      );
    }
  } catch (error) {
    console.log(error);
  }
};
