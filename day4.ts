import * as fs from 'fs';

const data = fs.readFileSync('day4.txt', 'utf8').split(/\r?\n/);


let grid = [];

grid.push('.'.repeat(data[0].length + 2).split(''));

for(const line of data){
    let row = []

    row.push('.')
    for(const item of line){
        row.push(item)
    }
    row.push('.')
    grid.push(row)

}

grid.push('.'.repeat(data[0].length + 2).split(''));

let totalRollsRemoved = 0

while(true){
    let rollsRemoved = 0

    for(let row = 1; row < grid.length - 1; row++){
        for(let col = 1; col < grid[0].length-1; col++){
            let up = grid[row - 1][col]
            let upRight = grid[row - 1][col+1]
            let right = grid[row][col+1]
            let downRight = grid[row+1][col+1]
            let down = grid[row+1][col]
            let downLeft = grid[row+1][col-1]
            let left = grid[row][col-1]
            let upLeft = grid[row-1][col-1]

            let neighbors = [up, upRight, right, downRight, down, downLeft, left, upLeft]

            let papers = neighbors.reduce((sum, cur) => {
                if(cur == '@'){
                    
                    return sum +1
                }else{
                    return sum
                }
            },0)

            if(papers < 4 && grid[row][col] == '@'){
                grid[row][col] = '.'
                rollsRemoved++
                totalRollsRemoved++
            }
        }
    }

    if(rollsRemoved == 0)
        break;
}



console.log(totalRollsRemoved)