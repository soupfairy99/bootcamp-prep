// YOUR CODE BELOW

function isTruthy (anyArgument) {
//check if argument is any condition of truthy
    if (!!anyArgument){
        return true;
    }
//check for various conditions of falsey
    else {
        if (anyArgument === false){
            return 'The boolean value false is falsey';
        }
        if (anyArgument === null){
            return 'The null value is falsey';
        }
        if (anyArgument === undefined){
            return 'undefined is falsey'
        }
        if (anyArgument === 0) {
            return 'The number 0 is falsey (the only falsey number)';
        }
        if (anyArgument ===''){
            return 'The empty string is falsey (the only falsey string)';
        }
    }
}