// YOUR CODE BELOW

function mySlice (originalArray, startIdx, endIdx){
//mimic the slice method
    let newArray = [];
//assign undefined variables
    if (!startIdx) {
        startIdx = 0;
    }
    if (!endIdx){
        endIdx = originalArray.length;
    }
//re-assign negative variables
    if (Math.sign(startIdx)=== -1){
        startIdx = originalArray.length + startIdx
    }
    if (Math.sign(endIdx)=== -1){
        endIdx = originalArray.length + endIdx
    }
    for (let i = startIdx; i < endIdx; ++i){
        newArray.push(originalArray[i])
    }
return newArray;
}