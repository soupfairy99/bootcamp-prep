// YOUR CODE BELOW
function doYouPlayTheTheremin(string){
    //returns true is the string begins with 's' or 'S'
    let stringFirstChar = string.charAt(0);
    if (stringFirstChar  === 's' || stringFirstChar ==='S') {
        return true;
    }
    else {
        return false;
    }
}