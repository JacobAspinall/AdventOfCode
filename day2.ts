import * as fs from 'fs';

const ranges = fs.readFileSync('day2.txt', 'utf8').split(',');
let sum = 0;

for(const range of ranges){
    let start = parseInt(range.split('-')[0]);
    let end = parseInt(range.split('-')[1]);

    for(let i = start; i <= end; i++){
        if(isInvalid(i)){
            console.log(i)
            sum += i;
        }
    }


}
console.log(sum)

function isInvalid(num : number): boolean{

    let str = num.toString();

    for(let windowSize = 1; windowSize <= Math.floor(str.length / 2); windowSize++){
            if(str.length % windowSize == 0){
                if(str.substring(0,windowSize).repeat(str.length / windowSize) === str)
                    return true;
            }
    }
    return false;
}