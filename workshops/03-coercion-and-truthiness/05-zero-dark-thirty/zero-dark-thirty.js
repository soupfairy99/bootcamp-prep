// YOUR CODE BELOW
function zeroDarkThirty (num){
//remove the zeros from a number
    if (num === 0){
        return NaN; 
    }
//convert the number to a string, and then to an array
    let numArray = num.toString().split('');
//loop through the array, removing zeros
    for (let i = 0; i < numArray.length; i++){
        let currVal =numArray[i];
        if (currVal === 0){
            numArray.splice(i,1);
        }
    }
//convert the array to a string, then to a float
    return parseFloat(numArray.join());
}