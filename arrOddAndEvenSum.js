function oddEvenSum(arr) {
    let oddSum = 0;
    let evenSum = 0;
    const l = arr.length;
    for (let i = 0; i < l; i++) {
        if (arr[i] % 2 == 0) {
            evenSum += arr[i];
        }
        else { oddSum += arr[i] };
    }
    // console.log(oddSum);
    // console.log(evenSum);
    return { oddSum, evenSum };
}


const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// oddEven(myArray);
console.log(oddEvenSum(myArray));