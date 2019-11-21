// YOUR CODE BELOW
const compareObjects = (obj1, obj2) => {
//compare two objects. return true if identical, false if not
    for (let key in obj1){
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    for (let prop in obj2){
        if (obj2[prop]!== obj1[prop]){
            return false;
        }
    }
return true; 
}