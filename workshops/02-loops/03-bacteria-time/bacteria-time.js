// YOUR CODE BELOw
function bacteriaTime (currentNum, targetNum){
    //return number of minutes needed for currentNum to reach target num
    let numberOfMinutes = 0;
    if (targetNum < currentNum){
        return 'targetNum must be larger than currentNum';
    }
    while (currentNum < targetNum) {
        //currentNum doubles each time period of 20 minutes
        currentNum = currentNum * 2;
        numberOfMinutes += 20; 
    }
    return numberOfMinutes; 
}