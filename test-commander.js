import { program } from "commander";
const app = program.command("add <a> <b>");
app.action((a, b) => {
  const result = Number(a) + Number(b);
  console.log(result);
});
program.parse(process.argv);
