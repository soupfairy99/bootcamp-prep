// YOUR CODE BELOW
function defaultGreet(firstName, lastName){
    let returnString='';
    if (!lastName) {
        lastName = 'Doe'
    }
    
  //  return "Hi " + firstName + " "+ lastName +"!";

  return `Hi ${firstName} ${lastName}!`;
}