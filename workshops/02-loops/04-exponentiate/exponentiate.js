// YOUR CODE BELOW

function exponentiate (base, power){
// raise the base to a power
  if (power === 0){
      return 1;
  }
  else {
      return base * exponentiate(base, power-1);
  }
}