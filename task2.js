import fs from "fs";
import csv from "csvtojson";

const readFilePath = "./upload/test.csv";
const writeFilePath = "./upload/result.txt";

const readStream = fs.createReadStream(readFilePath);
const writeStream = fs.createWriteStream(writeFilePath);
const csvParams = {
    delimiter: ";",
    noheader: false,
    headers: ['book','author', 'amount', 'price']
};

readStream.pipe(csv(csvParams).subscribe((json)=>{
        return new Promise((resolve, reject)=>{
            delete json['amount'];
            json.price = Number(json.price);
            resolve();
        })})
    )
    .pipe(writeStream)
    .on("error", console.log);

