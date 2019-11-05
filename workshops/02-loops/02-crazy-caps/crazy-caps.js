// YOUR CODE BELOW
function crazyCaps (string){
// capitalizes every other char
  string.toLowerCase(); 
  let crazyCapsString = "";
  let i = 0;
  //loop through string. Capitalize char at odd index
  while (i < string.length){
      if (i % 2 === 1) {
          crazyCapsString += string[i].toUpperCase(); 
      }
      else {
          crazyCapsString += string[i];
      }
      i++; 
  }
  return crazyCapsString; 
}