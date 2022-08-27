const figlet = require("figlet");
const inquirer = require("inquirer");
const chalk = require("chalk");
const mongoose = require("mongoose");
const Note = require("./db/noteModel");

const connection = require("./db/connection");
const {
  addNote,
  listNote,
  deleteNote,
  updateNote,
} = require("./utils/notes.js");

//Initial Options
const topLevelQuestion = [
  {
    type: "list",
    name: "options",
    message: "What would you like to do with your note app?",
    choices: ["add note", "view notes", "edit notes", "delete note", "exit"],
  },
];

//main function which runs the app
const main = async () => {
  console.log(chalk.blue(figlet.textSync("Notes App", { font: "Larry 3D" })));
  console.log("Starting App...");
  await connection();
  console.log(" ");
  app();
};

const restart = () => {
  setTimeout(() => {
    app();
  }, 2000);
};

//application logic
const app = async () => {
  const topLevelAnswer = await inquirer.prompt(topLevelQuestion);

  if (topLevelAnswer.options == "add note") {
    await addNote();
    restart();
  } else if (topLevelAnswer.options == "view notes") {
    await listNote();
    restart();
  } else if (topLevelAnswer.options == "edit notes") {
    await updateNote();
    restart();
  } else if (topLevelAnswer.options == "delete note") {
    await deleteNote();
    restart();
  } else if (topLevelAnswer.options == "exit") {
    console.log(
      chalk.blue(figlet.textSync("Ok, bye for now", { font: "Star Wars" }))
    );
    mongoose.disconnect();
  }
};

//this starts the whole app
main();
