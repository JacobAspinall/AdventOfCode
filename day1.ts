import * as fs from 'fs';

const data = fs.readFileSync('day1.txt', 'utf8').split(/\r?\n/);

let pos = 50;
let numZeroPositions = 0;


for(const line of data){
    let direction = line.substring(0,1);
    let count = parseInt(line.substring(1));
    let rotations = Math.floor(count / 100);
    let diff = count % 100;

    if(direction === "R"){

        if(pos !== 0 && pos + diff >= 100){
            if(diff > 0){
                numZeroPositions++
            }
        }
        numZeroPositions += rotations;
        pos = (pos + diff) % 100;
    }
    else{
        if(pos !== 0 && pos - diff <= 0){
            if(diff > 0){
                numZeroPositions++
            }
        }
        numZeroPositions += rotations;
        pos = (100 + (pos - diff)) % 100;
    }
}
console.log(numZeroPositions);