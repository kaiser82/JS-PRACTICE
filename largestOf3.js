function largest(a, b, c) {
    let large;
    if (a > b && a > c) {
        large = a;
    }
    else if (b > c) {
        large = b;
    }
    else large = c;
    return large;
}

const num1 = 124;
const num2 = 335;
const num3 = 66;

console.log(largest(num1, num2, num3));