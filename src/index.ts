import { App } from "./App";
import fs from "fs";
import path from "path";

const folderPath = "./data";

let folderNames: string[] = [];

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  files.forEach((file) => {
    console.log(file);
  });
});
