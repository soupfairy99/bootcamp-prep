// YOUR CODE BELOW
function maxOfThree (num1, num2, num3){
    let max = num1;
    for (let x = 0; x < arguments.length;x++){
        if (max < arguments[x])
        {
            max = arguments[x]
        }
    }
    return max;
}