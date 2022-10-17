// Fibonacci numbers have been studied for years and appear often in nature. Write a function that will return an array of Fibonacci numbers up to a given length n. Fibonacci numbers are calculated by adding the last two values in the sequence together. So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.

function fibonacciArray(n) {
    var fibArr = [0, 1];
    for (var i=0; i<n-2; i++) {
        fibArr.push(fibArr[i] + fibArr[i+1]);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result);