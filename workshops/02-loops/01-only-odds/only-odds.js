// YOUR CODE BELOW
function onlyOdds (someNumber){
    //find the sum of all odd integers between 1 and the parameter
    let oddSum = 0;
    for (let i = 1; i <= someNumber; i++){
        //loop from 1 to someNumber; test if odd
        if (i % 2 === 1 ){
      //if add, add to result
          oddSum += i;     
        }
    }
    return oddSum;
}