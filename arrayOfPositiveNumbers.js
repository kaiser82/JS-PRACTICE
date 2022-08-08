function positiveArray(arr) {
    const positiveArr = [];
    const l = arr.length;
    for (let i = 0; i < l; i++) {
        if (arr[i] >= 0) {
            positiveArr.push(arr[i]);
        }
        else { break; }
    }
    return positiveArr;
}

const myArray = [2, 3, 4, 5, 9, 2, -3, 6, 9, -1];

console.log(positiveArray(myArray));