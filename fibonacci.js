function fibonacciIterative(n) {
    const fibArray = [0, 1];

    for (let i = n; i > 1; i--) {
        fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    }

    return fibArray;
}


function fibonacciRecursive(n, fibArray = [0, 1]) {

    if (n < 2) return fibArray; // If N is less than two return the default fibArray
    if (n < fibArray.length) return fibArray; // If fibArray has numbers more than 0 upwards than the fibonacci number given then return fibArray
    if (n >= fibArray.length) { // if n is greater than fibArray length (means if there is too little amount of fibonacci's in the array) push a new fibonacci based on the previous two numbers
        fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    }

    return fibonacciRecursive(n, fibArray); // Recursively run n (this is because we are working up to n instead of subtracting from n each time as it would lead to problems), fibArray
}

// Example usage
console.log(fibonacciIterative(13));
console.log(fibonacciRecursive(13));