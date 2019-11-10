// YOUR CODE BELOW
function myIncludes (array, searchVal){
//check for a searchValue in an array and return true if found
    for (let i = 0; i < array.length; ++i ){
        if (array[i] === searchVal){
            return true;
        }
    }
    return false; 
}