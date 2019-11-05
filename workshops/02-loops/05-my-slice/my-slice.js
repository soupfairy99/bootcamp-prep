// YOUR CODE BELOW
function mySlice (originalString, startIdx, endIdx){
    //return a string copy starting at startIdx and ending before endIdx
    let stringSliced = "";
    // initialize start and end indexes if undefined
    if (startIdx === undefined) {
        startIdx = 0;
    }
    if (endIdx === undefined) {
        endIdx = originalString.length; 
    }
    //loop and copy within start and end indices
    for (let x =startIdx; x < endIdx; x++){
        stringSliced += originalString[x];
    }
    return stringSliced;
}