// YOUR CODE BELOW
function everyWhichWay(num1, num2, num3){
    //checks if num3 is a sum, difference, product or fraction of first 2 arguments
    if (num3 === (num1 + num2)){
        return 'sum';
    }
    else if (num3 === (num1 - num2)){
        return 'difference';
    }
    else if (num3 === (num1 * num2)){
        return 'product';
    }
    else if (num3 === (num1 / num2)){
        return 'fraction';
    }
    else {
        return null;
    }
}
