// YOUR CODE BELOW
function howEqual(argument1, argument2){
    if (argument1 === argument2){
        return 'strictly';
    }
    else if (argument1 == argument2){
        return 'loosely';
    }
    else{
        return 'not equal';
    }
}