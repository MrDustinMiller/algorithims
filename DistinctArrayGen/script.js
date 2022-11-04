
//when given N number we need to return N numbers that dont repeat and add up to 0
function solution(n) {
    let result = [];

    //for odd numbers
    if (n % 2 == 1) {
        result.push(0)
    }

    //math.floor to round down to nearest integer
    //start loop at 1 because we cannot have -0 as a number
    for (let i = 1; i <= Math.floor(n / 2) ; i++){
        result.push(i, -i);
    }

    return result;
}

console.log(solution(3))
console.log(solution(7))
console.log(solution(5))
console.log(solution(8))
console.log(solution(12))
console.log(solution(20))
