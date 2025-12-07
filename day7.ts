import * as fs from 'fs';

let data = fs.readFileSync('day7.txt', 'utf8').split(/\r?\n/);

let grid = [];

for(const line of data){
    let row = []

    for(const item of line){
        row.push(item)
    }
    grid.push(row)

}
let dict = new Map()

console.log(recurse(grid, 1,1))





function recurse(grid : string[][], startRow : number, startCol :  number) : number{

    let children = 0

    for(let row = startRow; row < grid.length; row++){
        for(let col = startCol; col < grid[0].length - 1; col++){
            if(grid[row - 1][col] == '|' || grid[row - 1][col] == 'S' ){
                if(grid[row][col] == '.')
                    grid[row][col] = "|"
                else if(grid[row][col] == '^'){

                    if(dict.has(row.toString() + " " + col.toString()))
                        return dict.get(row.toString() + " " + col.toString())



                    let left = copyGrid(grid)
                    left[row][col-1] = "|"

                    let right = copyGrid(grid)
                    right[row][col+1] = "|"

                    children += recurse(left,row+1, col - 1)

                    children += recurse(right,row+1, col + 1)

                    dict.set(row.toString() + " " + col.toString(), children)

                    return children
                }

            }
        
        }
    }
    //printTele(grid)
    return 1
}


function printTele(grid: string[][]){
    let grids = ""
    for(const row of grid){
        let rows = ""
        for(const col of row){
            rows += col
        }
        grids += rows + '\n'
    }

    console.log(grids)
}

function copyGrid(grid: string[][]) : string[][]{
    let gridc = []
    for(const row of grid){
        let rowc = []
        for(const col of row){
            rowc.push(col)
        }
        gridc.push(rowc)
    }

    return gridc
}