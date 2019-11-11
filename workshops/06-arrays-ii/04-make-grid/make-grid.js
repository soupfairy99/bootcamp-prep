// YOUR CODE BELOW

function makeGrid(numColumns, numRows){
//create a two dimensional array with numbers
    let gridArray =[];
    let rowArray = [];
//make row arrays with numbers
    for (let i = 1; i <= numColumns; ++i){
        rowArray.push(i);
    }
//push rows to outer array
    for (let j = 0; j < numRows; j++){
        gridArray.push(rowArray);
    }
    return gridArray; 
}