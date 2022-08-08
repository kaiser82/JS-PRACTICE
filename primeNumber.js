function primeNumber(num) {
    let result;
    if (num == 1) {
        result = "Not Prime Number";
    }
    if (num == 2) {
        result = "Prime Number";
    }
    let i = 2;
    while (i < num) {
        if (num % i !== 0) {
            result = "Prime Number";
        }
        else {
            result = "Not Prime Number";
            break;
        }
        i++;
    }
    return result;
}
let number = 34;
let checkNumber = primeNumber(number);
console.log(checkNumber);