function arrayAvg(numbers) {
    let total = 0;
    let size = numbers.length;
    for (let i = 0; i < size; i++) {
        total += numbers[i];
    }
    let avg = total / size;
    return avg;
}

const myArray = [5, 7, 3, 8, 6];

console.log(arrayAvg(myArray));