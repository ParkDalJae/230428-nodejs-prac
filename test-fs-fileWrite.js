import { writeFile } from "fs";

const fileName = "김첨지";
const contentText = "설렁탕";

writeFile("./result/" + fileName + ".txt", contentText, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("파일 생성 완료");
  }
});
