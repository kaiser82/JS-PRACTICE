function secondLargestNumber(arr) {
    let firstLargest = arr[0];
    let secondLargest = 0
    const size = arr.length;
    if (size < 2) {
        return "There is no Second Number!"
    }

    for (let i = 0; i < size; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        else if (arr[i] !== firstLargest && arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

const myArray = [23, 11, 45, 66, 89, 21, 12, 5];

console.log(secondLargestNumber(myArray));


