// YOUR CODE BELOW
function myLastIndexOf (array, searchVal, startIdx){
//return last index of search value from array
    if (!startIdx){
        startIdx = array.length-1;
    }
//loop through array decrementing until value found
    for (let i = startIdx; i >= 0; --i){
        if (array[i] === searchVal){
            return i;
        }
    }
return -1; 
}