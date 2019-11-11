// YOUR CODE BELOW
function arrayFlattener(twoDArray){
//write a two dimensional array to one dimensional array
    let flatArray =[];
    for (let i = 0; i < twoDArray.length; ++i){
//check for inner array and concat instead of push
        if (Array.isArray(twoDArray[i])){
           flatArray = flatArray.concat(twoDArray[i]);
        }
        else{
            flatArray.push(twoDArray[i]);
        }
    }
    return flatArray;
}