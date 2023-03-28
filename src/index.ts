import { App } from "./App";
import fs from "fs";
import path from "path";

const folderPath = "./data";

let folderNames: string[] = [];

fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  folderNames = files
    .filter((file) => file.isDirectory())
    .map((file) => file.name);
});

console.log(folderNames);