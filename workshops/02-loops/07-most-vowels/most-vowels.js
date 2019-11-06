// YOUR CODE BELOW
function mostVowels (stringOfWords) {
//returns word with the most vowels. First split string into an array of words
    let array = stringOfWords.split(' '); 
    let max = 0;
    let index = 0;
    let count = 0;
    let vowels = 'aeiouAEIOU';
    let char = '';
//loop through array items
        for (let i = 0; i < array.length; i++){
            let word = array[i];
            count = 0;
//loop through characters in each word checking for vowels
            for (let y = 0; y < word.length; y++) {
                char = word[y];
                if ( vowels.includes(char)){
                    count++
                }
            } 
//check for max vowels
            if (count > max){
                max = count;
                index = i;
            }
        }
   if (max === 0) {
       return '';
   }
   let returnword = array[index];
//check for '.' if most vowels word is the last word
   if (returnword[returnword.length-1]==='.'){
       return returnword.slice(0,-1);
   }
   return returnword; 
}