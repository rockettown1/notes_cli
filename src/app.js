const figlet = require("figlet");
const inquirer = require("inquirer");
const { addNote } = require("../utils/notes.js");

const topLevelQuestion = [
  { type: "list", name: "options", message: "What would you like to do?", choices: ["add", "list", "remove", "exit"] },
];

const addQuestion = [{ type: "input", name: "add", message: "What would you like to add?" }];

const main = () => {
  console.log(figlet.textSync("Notes App"));
  app();
};

const app = async () => {
  const answers = await inquirer.prompt(topLevelQuestion);
  if (answers.options == "add") {
    const answer = await inquirer.prompt(addQuestion);
    addNote(answer.add);

    app();
  } else if (answers.options == "list") {
    console.log("listing notes...");
    app();
  } else if (answers.options == "remove") {
    console.log("removing a note");
    app();
  } else if (answers.options == "exit") {
    console.log("Ok, bye for now");
  }
};

main();
