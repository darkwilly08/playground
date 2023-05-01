import * as fs from "fs";
import promptSync from "prompt-sync";
import { exec } from "child_process";

const prompt = promptSync({ sigint: true });

const getSnippets = async () => {
  return new Promise<string[]>((resolve, reject) => {
    fs.readdir("./snippets", (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
};

const executeSelectedSnippet = async (snippetName: string) => {
  console.log(`Running ./snippets/${snippetName}`);
  await new Promise((resolve, reject) => {
    exec(`ts-node-esm ./snippets/${snippetName}`, (err, stdout, stderr) => {
      if (err) {
        console.error("script error", err);
        reject(err);
      } else {
        console.log(stdout);
        resolve(null);
      }
    });
  });
};

const start = async () => {
  const snippets = await getSnippets();
  snippets.forEach((snippet, index) => {
    console.log(`[${index}] ${snippet}`);
  });

  const option = Number(prompt("Select a snippet to run: "));

  if (option >= snippets.length) {
    console.log("Invalid option");
    return;
  }

  await executeSelectedSnippet(snippets[option]);
};

start()
  .catch(console.error)
  .finally(() => process.exit());
