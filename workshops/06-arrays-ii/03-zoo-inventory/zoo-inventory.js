// YOUR CODE BELOW
function zooInventory(myZoo){
//return a flat array with sentences about each array element animal
    let sentenceZoo = [];
    for (let i = 0; i < myZoo.length; ++i){
        let currAnimal = myZoo[i];
//extract data from array and set to variable names
        let name = currAnimal[0];
        let species = currAnimal[1][0];
        let age = currAnimal[1][1];
//create sentences with string literals and push to output array
        sentenceZoo.push(`${name} the ${species} is ${age}.`);
    }
    return sentenceZoo; 
}