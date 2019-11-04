// YOUR CODE BELOW
function maxOfThree (num1, num2, num3){
    // returns the max of 3 numbers
    let max = num1;
    for (let x = 0; x < arguments.length;x++){
        if (max < arguments[x])
        {
            max = arguments[x]
        }
    }
    return max;
}