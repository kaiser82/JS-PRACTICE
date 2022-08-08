function secondLargest(numbers) {
    let largest = 0;
    let secondlarge = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > secondlarge) {
            secondlarge = numbers[i];
            if (secondlarge > largest) {
                let temp = largest;
                largest = secondlarge;
                secondlarge = temp;
            }
        }
    }
    return secondlarge;
}

const myArray = [90, 10, 85, 20, 30, 40, 50, 60, 70, 68];

console.log("Second Largest number: ", secondLargest(myArray));