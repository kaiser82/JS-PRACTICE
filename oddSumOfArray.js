let numbers = [5, 7, 8, 10, 45, 30];
// let array_length = numbers.length;


function findOddSum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];

        if (num % 2 != 0) {
            total += num;
        }
    }
    return total;
}

let calculate = findOddSum(numbers);
console.log("Odd Total = ", calculate);