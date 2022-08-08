
function factorial(num) {
    let i = num;
    let factor = 1;
    while (i > 0) {
        factor *= i;
        i--;
    }
    return factor;
}

let cal = factorial(4);
console.log(cal);