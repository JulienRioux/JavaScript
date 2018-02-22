function minesweeper(matrix){
    
    let result = [];
    // create an empty matrix of 0
    for(let i = 0; i < matrix.length; i++){
        let vector = [];
        for(let j=0 ; j < matrix[0].length; j++){
            vector.push(0);
        }
        // push the empty vector to the result matrix
        result.push(vector);
    }
    // add points to the neighbors
    for(let i=0;i < matrix.length; i++){
        for (let j=0;j < matrix[0].length; j++) {
            if(matrix[i][j]) {
                // check for the uppers ones
                if(i > 0){
                    result[i-1][j]++;
                    // check for upper left diagonal
                    if(j > 0){
                        result[i-1][j-1]++;
                    }
                    // check for upper right diagonal
                    if(j < matrix[0].length-1){
                        result[i-1][j+1]++;
                    }
                }
                // check for the lowers ones
                if(i < matrix.length-1){
                    result[i+1][j]++;
                    // check for the lower left diagonal
                    if(j > 0){
                        result[i+1][j-1]++;
                    }
                    // check for the lower right diagonal
                    if(j < matrix[0].length-1){
                        result[i+1][j+1]++;
                    }
                }
                // check for left 
                if(j > 0){
                    result[i][j-1]++;
                }
                // check for right
                if(j < matrix[0].length-1){
                    result[i][j+1]++;
                }
            }
        }
    }
    return result;
}
