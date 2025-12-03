import * as fs from 'fs';

const data = fs.readFileSync('day3.txt', 'utf8').split(/\r?\n/);
const numBats = 12;

let totalJolts = 0;

for(const bank of data){
    let batString = "";
    let startPos = 0;

    for(let i = 0; i < numBats; i++){
        let res = maxJolts(bank, startPos, numBats - i - 1);
        batString += res[0].toString();
        startPos = res[1] + 1;
    }

    totalJolts += parseInt(batString);
}

function maxJolts(bank : string, startPos: number, positionsLeftOver: number){
    let highestBat = -1;
    let highestBatPos = 0;
    for(let battery = startPos; battery < bank.length - positionsLeftOver; battery++){
        if(parseInt(bank[battery]) > highestBat){
            highestBat = parseInt(bank[battery]);
            highestBatPos = battery;
        }
    }
    return [highestBat, highestBatPos]
}

console.log(totalJolts);