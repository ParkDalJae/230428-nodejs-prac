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
        message: "파일이름을 입력하세요:",
      },
      {
        type: "input",
        name: "titleTag",
        message: "타이틀 제목을 입력하세요:",
      },
      {
        type: "list",
        name: "useDiv",
        message: "DIV#root를 사용하시겠습니까?",
        choices: ["예", "아니오"],
      },
      {
        type: "input",
        name: "writeContentPTag",
        message: "본문의 내용을 입력해주세요",
      },
    ]);

    const fileName = answers.fileName;

    function choiceDiv() {
      if (answers.useDiv === "예") {
        return `<div id= "root"><p>${answers.writeContentPTag}</p></div>`;
      } else if (answers.useDiv === "아니오") {
        return `<p>${answers.writeContentPTag}</p>`;
      }
    }

    const useDiv = choiceDiv();

    let htmlString = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${answers.titleTag}</title>
    </head>
    <body>${useDiv}</body>
  </html>
  `;

    writeFile("./result/" + fileName + ".html", htmlString, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Creating file: ${fileName}`);
      }
    });
  });

program.parse(process.argv);
