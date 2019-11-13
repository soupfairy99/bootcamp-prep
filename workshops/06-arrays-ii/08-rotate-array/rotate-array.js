// YOUR CODE BELOW

function rotateArray (originalArray, rotateNum){
    let newArray= [];
    let spliceArray = []; 
    if (rotateNum === 0){
        newArray = originalArray;
    }
    if (Math.sign(rotateNum)=== -1){
        spliceArray = originalArray.splice(0,Math.abs(rotateNum));
        newArray = originalArray.concat(spliceArray);
    }
    else {
        spliceArray= originalArray.splice(rotateNum * -1);
        newArray = spliceArray.concat(originalArray);
    }
    return newArray; 
}