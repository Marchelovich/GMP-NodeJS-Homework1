import fs from "fs";
import csv from "csvtojson";

const readFilePath = "./upload/test.csv";
const writeFilePath = "./upload/result.txt";

const readStream = fs.createReadStream(readFilePath)
    .on("error", (e) => {console.log(e)});
const writeStream = fs.createWriteStream(writeFilePath)
    .on("error", (e) => {console.log(e)});

readStream.pipe(csv()).pipe(writeStream).on("error", (e) => console.log(e));

