// YOUR CODE BELOW
function lastCharacter (string1, string2){
    //returns true if the last characters are equal
    let string1LastChar = string1.charAt(string1.length -1);
    let stringLastChar2 = string2.charAt(string2.length -1);
    if (stringLastChar2 === string1LastChar) {
        return true;
    }
    else {
        return false; 
    }
}