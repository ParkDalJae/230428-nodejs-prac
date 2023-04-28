// todo 필요한 요구사항은 다음과 같다.
// ? 1. CLI환경에서 입력을 받은 데이터가, html파일의 이름으로 사용된다.
// ? 2. html 파일의 기본요구사항
// *   a. title 태그의 기본정보
// *   b. body 태그의 자식으로서 최상위 div #root 태그 사용 유무 선택가능한 방식
// *    c. 본문<p> 태그 내용작성
// ?3. 위 abc 항을 모두 충족하는 형태의 CLI 입력을 모두 받고, 입력데이터를 기초데이터로 HTML파일이 /result 디렉토리에 생성(create)
// todo 개발자 작업 관점
// ? 1. 결과물을 내기 위한 ‘전처리 pre-processing’ 단계이므로 자유롭게 cli 애플리케이션을 활용해 빠르게 원하는 데이터가 남긴 파일들을 양산할 수 있게끔 진행하여 작업 퍼포먼스 증대

import inquirer from "inquirer";
import { program } from "commander";

inquirer
  .prompt([
    { type: "input", name: "fileName", message: "파일 이름을 입력하세요:" }, //파일명
    {
      type: "input",
      name: "fileTitleTag",
      message: "타이틀 제목을 입력하세요:",
    }, //타이틀 제목
    {
      type: "list",
      name: "useDivIdRoot",
      message: "DIV#root를 사용하시겠습니까?",
      choices: ["예", "아니오"],
    }, //DIV#root 사용 여부
    {
      type: "input",
      name: "writeContentPTag",
      message: "본문 내용을 입력하세요:",
    }, //본문 내용
  ])
  .then((answers) => {
    function choiceDiv() {
      if (answers.useDivIdRoot === "예") {
        return `<div id= "root"><p>${answers.writeContentPTag}</p></div>`;
      } else if (answers.useDivIdRoot === "아니오") {
        return `<p>${answers.writeContentPTag}</p>`;
      }
    }
    let useDivTag = choiceDiv();
    let htmlString = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${answers.fileTitleTag}</title>
        </head>
        <body>${useDivTag}</body>
      </html>
      `;
    console.log(answers.fileName, answers.useDivIdRoot, useDivTag);
    console.log("./result/" + answers.fileName + ".html", htmlString);
  });
