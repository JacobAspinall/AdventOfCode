import * as fs from 'fs';

const data = fs.readFileSync('day6.txt', 'utf8').split(/\r?\n/);


let operator = ""
let nums = []

let sum = 0

for(let col = 0; col < data[0].length + 1; col ++){

    if((data[0][col] == " " && data[1][col] == " " && data[2][col] == " " && data[3][col] == " ") || (col == data[0].length)){
        let res = parseInt(nums[0])

        for(let i = 1; i < nums.length; i++){
            if(operator == '+')
                res += parseInt(nums[i])
            else if(operator == '*')
                res *= parseInt(nums[i])
        }
        sum += res
        nums = []
        continue
    }


    if(data[4][col] == '+' || data[4][col] == '*'){
        operator = data[4][col]
    }
        

    let num = ""

    for(let row = data.length - 2; row >= 0; row--){
        num = data[row][col] + num
    }

    nums.push(num)
    //console.log(num)
}
console.log(sum)