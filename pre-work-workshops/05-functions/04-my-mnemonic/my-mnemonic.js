// YOUR CODE BELOW
function myMnemonic () {
    //return the first letter of each argument passed in 
    let returnMnemonic = '';
    for (let x = 0; x < arguments.length; x++) {
        returnMnemonic += arguments[x].charAt(0);
    }
    return returnMnemonic;
}
