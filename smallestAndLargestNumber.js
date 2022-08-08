let numbers = [40, 45, 150, 66, 34, 23, 99, 87, 45, 243, 22, 12, 5];

function smallestNumber(numbers) {
    let small = numbers[0];
    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] < small) {
            small = numbers[i];
        }
    }
    return small;
}

function largestNumber(numbers) {
    let large = numbers[0];
    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] > large) {
            large = numbers[i];
        }
    }
    return large;
}



let smallestNumberOfArray = smallestNumber(numbers);
console.log("Smallest number: ", smallestNumberOfArray);
console.log("Largest number: ", largestNumber(numbers));