// YOUR CODE BELOW
function oddCouple (numArray){

//return a new array with two or fewer odd numbers
    let oddCoupleArray = [];
    let oddCount = 0;
    for (let x = 0; x < numArray.length; ++x){
//write odd numbers to the new array until count is 2
        if (numArray[x] % 2 === 1 && oddCount < 2) {
            oddCoupleArray.push(numArray[x]);
            oddCount++;
        }
    }
    return oddCoupleArray;
}