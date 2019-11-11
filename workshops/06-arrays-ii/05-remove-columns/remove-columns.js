// YOUR CODE BELOW

function removeColumns(originalGrid, numColums){
//remove the correct number of elements from each inner array
    for (let i = 0; i < originalGrid.length; ++i){
        originalGrid[i].splice(numColums*-1);
    }
return originalGrid;
}