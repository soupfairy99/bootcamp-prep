// YOUR CODE BELOW
function evenAndOdd (array){
//return a new array containing an array with even numbers followed by an array of odds
    let bothArray = [[],[]];
    for (let i = 0; i < array.length; ++i ){
        if (array[i] % 2 ===  1){
            bothArray[1].push(array[i]);
        }
        else {
            bothArray[0].push(array[i]);
        }
    }
    return bothArray;
}