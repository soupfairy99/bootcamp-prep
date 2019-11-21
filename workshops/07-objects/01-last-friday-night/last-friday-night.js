// YOUR CODE BELOW

const lastFridayNight = (transactions) => {
    //returns the total of amounts within each object in the array
    let returnVal = 0;
    for (let x = 0; x < transactions.length; x++){
        returnVal += transactions[x].amount;
    }
    return returnVal; 
}