const answers = {
  useDiv: "아니오",
  writeContentPTag: "본문내용",
};
function choiceDiv() {
  if (answers.useDiv === "아니오") {
    return `<div id= "root"><p>${answers.writeContentPTag}</p></div>`;
  } else if (answers.useDiv === "아니오") {
    return `<p>${answers.writeContentPTag}</p>`;
  }
}

const useDiv = choiceDiv();

console.log(useDiv);
