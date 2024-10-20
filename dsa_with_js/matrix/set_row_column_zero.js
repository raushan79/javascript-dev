// in matrix if any row or column if have 0 value max it whole row and column zero

let matrix = [[1,1,1],[1,0,1],[1,1,1]]
console.log(`initial matrix : ${matrix}`)



for (let row=0; row<matrix.length; row++){
    for(col=0; col<matrix[row].length; col++){
        console.log(`row : ${row} and col : ${col} -> value : ${matrix[row][col]}`);
        if (matrix[row][col] ==0){
            for(let i=0 ; i< matrix.length ; i++){
                console.log(row, col ,i);
                matrix[row][i] = 0;
                matrix[i][col] = 0;
            }
        }

    }
    break;
}

console.log(matrix);


"[{\"act\":\"bhartiya dand sanhahta 1860\",\"section\":\"380\"},{\"act\":\"bhartiya dand sanhahta 1860\",\"section\":\"454\"}]"

"[\"{\"act\": \"Indian Penal Code\", \"section\": \"380, 504, 506\"}\", \"{\"act\": \"SC ST Act\", \"section\": \"3(1)d, 3(1)\"}\"]"