const figlet = require("figlet");
const inquirer = require("inquirer");
const chalk = require("chalk");
const { addNote, listNotes, removeNote } = require("../utils/notes.js");

const topLevelQuestion = [
  { type: "list", name: "options", message: "What would you like to do?", choices: ["add", "list", "remove", "exit"] },
];

const addQuestion = [{ type: "input", name: "add", message: "What would you like to add?" }];

const removeQuestion = [
  { type: "input", name: "remove", message: "What would you like to remove? Please type a number" },
];

const main = () => {
  console.log(chalk.blue(figlet.textSync("Notes App", { font: "smkeyboard" })));
  app();
};

const app = async () => {
  const answers = await inquirer.prompt(topLevelQuestion);
  if (answers.options == "add") {
    const answer = await inquirer.prompt(addQuestion);
    addNote(answer.add);

    app();
  } else if (answers.options == "list") {
    listNotes();
    app();
  } else if (answers.options == "remove") {
    listNotes();
    const answer = await inquirer.prompt(removeQuestion);
    removeNote(answer.remove);
    app();
  } else if (answers.options == "exit") {
    console.log("Ok, bye for now");
  }
};

main();
