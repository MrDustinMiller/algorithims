//main take away here was to have a seperate variable (min) to assign a starting value to
//then compare the index of our array to that variable, if it equals, increase min +1
//if the index in the array does not equal our min variable then get out of loop
//and return our min value (if index and min arent eqaul then min is not in array)
function solution(A) {
    let sortedOgArray = A.sort((a,b) => a -b);

    let min = 1; 

    for (var i in sortedOgArray) {
        if (sortedOgArray[i] > -1 && sortedOgArray[i] == min) {
                min++;
        }
    }

    return min;
    
}

console.log(solution([1, 3, 5, 2]))