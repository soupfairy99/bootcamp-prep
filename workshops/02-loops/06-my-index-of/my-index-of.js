// YOUR CODE BELOW

function myIndexOf (source, searchValue, startIdx){
//function to find the start index of the searchValue in the string
//set startIdx to 0 if a value is not already assigned
    if (!startIdx) {
        startIdx = 0;
    }
//loop through string checking for searchValue
    for (let i = startIdx; i < source.length; i++){
        if (searchValue[0] === source[i]) {
//if first char found, take a slice as long as searchValue and compare
            let sourceVal = source.slice(i,searchValue.length + i);
            if (sourceVal === searchValue){
                return i;            
            }
        }
    }
    return -1; 
}