import fs from "fs";
import csv from "csvtojson";
import { pipeline } from "stream"

const readFilePath = "./upload/test.csv";
const writeFilePath = "./upload/result.txt";

const readStream = fs.createReadStream(readFilePath).on("error", console.log);
const writeStream = fs.createWriteStream(writeFilePath).on("error", console.log);
const csvParams = {
    delimiter: ";",
    noheader: false,
    headers: ['book','author', 'amount', 'price']
};

pipeline(
    readStream,
    csv(csvParams).on("data", (json) => {
            const jsonData = JSON.parse(json.toString())
            delete jsonData['amount'];
            jsonData.price = Number(jsonData.price);
            writeStream.write(JSON.stringify(jsonData) + '\n');
        }),
    (err) => {
        if (err) {
            console.log(err);
        }
    }
)

