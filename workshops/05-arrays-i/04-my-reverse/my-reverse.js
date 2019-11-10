// YOUR CODE BELOW
function myReverse (array){
//return reversed array
    let reverseArray = [];
    for (let i = 0; i < array.length; ++i){
        reverseArray.unshift(array[i]);
    }
    return reverseArray; 
}