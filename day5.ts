import * as fs from 'fs';

const data = fs.readFileSync('day5.txt', 'utf8').split(/\r?\n/);

let ranges = []

for(const line of data){
    if(line.includes('-'))
        ranges.push([parseInt(line.split('-')[0]),parseInt(line.split('-')[1])])
}

let prevNumRanges = ranges.length

while(true){

    ranges = combineRanges(ranges)
    if(ranges.length == prevNumRanges)
        break
    prevNumRanges = ranges.length

}

let sum =0

for(const range of ranges){
    console.log(range)
    sum += range[1] - range[0] + 1
}

console.log(sum)

function combineRanges(ranges: number[][]) : number[][]{
    const combinedRanges = []

    for(const range of ranges){
        let rangeCombined = false
        for(const combinedRange of combinedRanges){
            if(range[0] >= combinedRange[0] && range[1] <= combinedRange[1]){
                rangeCombined = true
                break
            }
                
            else if(range[0] < combinedRange[0] && range[1] > combinedRange[1]){
                combinedRange[0] = range[0]
                combinedRange[1] = range[1]
                rangeCombined = true
                break;
            }
            else if(range[0] < combinedRange[0] && range[1] >= combinedRange[0]){
                combinedRange[0] = range[0]
                rangeCombined = true
                break
            }
            else if(range[0] <= combinedRange[1] && range[1] > combinedRange[1]){
                combinedRange[1] = range[1]
                rangeCombined = true
                break
            }
        }
        if(!rangeCombined)
            combinedRanges.push(range)
    }
    return combinedRanges
}


