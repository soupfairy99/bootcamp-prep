// YOUR CODE BELOW
function onlyOne (arg1, arg2, arg3){
    //return true only if one and only one argument is true
    if (!!arg1 && !arg2 && !arg3) {
        return true;
    }
    if (!arg1 && !!arg2 && !arg3){
        return true;
    }
    if (!arg1 && !arg2 && !!arg3){
        return true;
    }
    return false;
}
