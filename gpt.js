import { writeFile } from "fs";

import { Command } from "commander";
import inquirer from "inquirer";

const program = new Command();

program
  .command("create")
  .description("Create a new file")
  .action(async () => {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "fileName",
        message: "Enter file name:",
      },
      {
        type: "input",
        name: "titleTag",
        message: "Enter title name:",
      },
    ]);
    const fileName = answers.fileName;
    const titleString = answers.titleTag;
    writeFile("./result/" + fileName + ".html", titleString, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Creating file: ${fileName}`);
      }
    });
  });

program.parse(process.argv);
