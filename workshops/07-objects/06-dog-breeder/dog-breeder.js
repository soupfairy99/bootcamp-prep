// YOUR CODE BELOW
//Define a function, `dogBreeder`, that accepts up to two optional arguments:
//  1. name (string)
//  2. age (number)

//`dogBreeder` should return an object that represents a new dog! If the user
//doesn't define a name, assume the dog's name is Steve. If the user doesn't
//define the dog's age, assume the dog's age is 0.

//```javascript
//dogBreeder('Sam', 12)    // => {name: 'Sam', age: 12}

//dogBreeder(15)    // => {name:'Steve', age: 15}
//```
//

const dogBreeder = (name, age) => {
    let newDog = {};
    if (!name){
        name = 'Steve';
    }
    if (typeof name === 'number'){
        age = name; 
        name = 'Steve';
    }
    if (!age){
        age = 0; 
    }
    newDog['name'] = name;
    newDog['age'] = age;
    return newDog; 
}