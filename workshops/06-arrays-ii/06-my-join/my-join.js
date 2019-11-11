// YOUR CODE BELOW
function myJoin(array, separator){
    if (separator === undefined){
        separator = ',';
    }
    let string ='';
    let tempString ='';
    for (let i = 0; i < array.length-1; ++i){
        if ( !array[i]){
             tempString ='';
        }
        else{
         tempString = array[i]; 
        }
        string += tempString + separator;
    }
    string += array[array.length -1];
    return string;
}