// YOUR CODE BELOW
const callThemAll =(obj, num) => {
    let returnedVal = [];
    for (let key in obj) {
        if (typeof obj[key] === 'function'){       
        returnedVal.push(obj[key](num));
        }  
    } 
    return returnedVal; 
}
