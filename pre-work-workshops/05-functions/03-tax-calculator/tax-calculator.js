// YOUR CODE BELOW

function taxCalculator (price, state){
    //calculate total price based on state tax rate
    if (state === 'NJ') {
        return price * 1.06625;
    }
    if (state === 'NY') {
        return price * 1.04; 
    }
}
