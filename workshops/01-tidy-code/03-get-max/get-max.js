// YOUR CODE BELOW
function getMax(first, second, third) {
    //compare 3 numbers and return the greatest number
    if (first > second) {
        if (first > third) {
            return first;
        } 
        return third;
    } 
    else if (second > third) {
        return second;
    }
    else {
        return third;
    }
}
