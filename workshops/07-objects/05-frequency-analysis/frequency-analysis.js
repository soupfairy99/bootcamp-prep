// YOUR CODE BELOW
//function to count the occurence of each character in a string
const frequencyAnalysis = (stringLc) => {
    let alphaCountObj = {};
    for (let i = 0; i < stringLc.length; ++i){
//if object does not yet contain the char, init count (value) to one for that property
        if (!alphaCountObj[stringLc[i]]){
            alphaCountObj[stringLc[i]] = 1;
        }
//if prop exits, increment by one
        else{
            alphaCountObj[stringLc[i]]++;
        }
    }
    return alphaCountObj;
}
