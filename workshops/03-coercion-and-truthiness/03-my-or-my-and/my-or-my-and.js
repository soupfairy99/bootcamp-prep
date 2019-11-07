// YOUR CODE BELOW
function myOr(arg1, arg2, arg3){
//tests the truthiness of each consecutive value
    if (!!arg1){
        return arg1;
    }
    else if (!!arg2){
        return arg2;
    }
    else {
        return arg3;
    }
}

function myAnd (arg1, arg2, arg3){
//tests the falseyness of each consecutive value

    if (!arg1){
        return arg1;
    }
    else if (!arg2){
        return arg2;
    }
    else {return arg3;}
}