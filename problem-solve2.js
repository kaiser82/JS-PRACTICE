// function foo() {
//     console.log("foo");
//     bar();
// }

// function bar() {
//     console.log("bar");
// }

// foo();


// problem2  

// let value1 = 124;
// let value2 = 224;
// let value3 = 324;
// function make_avg(num1, num2, num3) {
//     let total = num1 + num2 + num3;
//     let avg = total / 3;
//     return avg;
// }

// let avgValue = make_avg(value1, value2, value3);
// console.log("Avarage of the numbers is: ", avgValue);



// problem 3

// let numbers = [14, 56, 77, 34, 25, 60, 77];
// let len = numbers.length;


// function make_avg(arr, le) {
//     let total = 0;
//     for (let i = 0; i < le; i++) {
//         total += arr[i];
//     }
//     let avg = total / le;
//     return avg;
// }

// let array_average = make_avg(numbers, len);
// console.log(parseFloat(array_average.toFixed(2)));



// problem4


// function odd_even(num1) {
//     let result;
//     if (num1 % 2 == 0) {
//         result = "Even Number";
//     }
//     else result = "Odd Numner";
//     return result;
// }

// let check = odd_even(1234);
// console.log(check);



// function odd_even(num1) {
//     if (num1 % 2 == 0) {
//         console.log("Even Number");
//     }
//     else console.log("Odd Number");
// }

// odd_even(12341);



// problem5

// by using switch
// let signal = '';

// switch (signal) {
//     case 'red':
//         console.log("Danger");
//         break;

//     case 'yellow':
//         console.log("Stop");
//         break;

//     case 'green':
//         console.log("Cross the road");
//         break;

//     default:
//         console.log("Watch the color of the signal!!!");
// }



// by if else

// let signal = "red";
// if (signal == "red") {
//     console.log("Danger");
// }
// else if (signal == "yellow") {
//     console.log("Stop");
// }
// else if (signal == "green") {
//     console.log("Cross the raod");
// }
// else console.log("Watch the color of the signal !!!");







/*
Extra practice problem..
*/

// ex-1

// let num = 13;

// function multiplication_table(num1) {
//     for (let i = 1; i <= 10; i++) {
//         let multi = num1 * i;
//         console.log(num1, "X", i, "=", multi);
//     }
// }

// multiplication_table(num);



// ex-2

// function upper_lower(text1) {
//     let modity = text1.toUpperCase();
//     console.log(modity);
//     let out = modity.toLowerCase();
//     return out;
// }

// let name = upper_lower("Kaiser Ahmed");
// console.log(name);


// ex-3

// let firstName = "hablu";
// let lastName = "kanto";

// function fullName(txt1, txt2) {
//     let fullName = txt1 + " " + txt2;
//     return fullName;
// }

// let showName = fullName(firstName, lastName);
// console.log(showName);


// ex-4

function doSquare(num) {
    return num * num;
}

let test = doSquare(12);
console.log(test);