// YOUR CODE BELOW
function myUnshift (arr, value){
//returns a new array with the value as the first index
    let newArray = [value];
    for (let i = 0; i < arr.length; ++i){
        newArray.push(arr[i]);
    }
    return newArray;
}
