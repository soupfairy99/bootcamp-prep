let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW

const leetTranslator = (string) => {

// translates a string into Leet
    let leetCodex ={};
    let returnString = '';
    let stringLc = string.toLowerCase();
// build object with alpha keys and leet values
    for (let x = 0; x < letters.length; x++){
        leetCodex[letters[x]]= leetChars[x];
    }
//loop through string finding Leet chars and adding to return string
    for (let y = 0; y < stringLc.length; y++){
        returnString += leetCodex[stringLc[y]];
    }
    return returnString; 
}