//fibonacci numbers are numbers that after the first two [0,1] are the sum of the two
//preceding numbers
function FibonacciSequence(n) {
    let array = [0,1];

    for (let i = 2; i <= n; i++) {
        let a = array[i - 1];
        let b = array[i - 2];
        array.push(a + b);
    }        

    return array[n];
}

console.log(FibonacciSequence(7));