// Problem -1

var fruit = ["Apple", "Banana", "Orange"];
var position = fruit.indexOf("Banana");
console.log(position);
fruit[1] = "Mango";
console.log(fruit);
fruit.pop();
console.log(fruit);
fruit.push("Watermelon");
console.log(fruit);

// Problem -2

var myScore = 85;
var tomsScore = 66;
var janesScore = 95;
var petersScore = 56;
var johnsScore = 40;

function gradeCalculator(score) {
    if (score >= 80) {
        console.log("A grade");
    } else if (score >= 60) {
        console.log("B grade");
    } else if (score >= 50) {
        console.log("C grade");
    } else if (score >= 40) {
        console.log("D grade");
    } else console.log("F grade");
}
console.log("My grade: ");
gradeCalculator(myScore);
console.log("Tom's Grade: ");
gradeCalculator(tomsScore);
console.log("Jane's Grade: ");
gradeCalculator(janesScore);
console.log("Peter's Grade: ");
gradeCalculator(petersScore);
console.log("John's Grade: ");
gradeCalculator(johnsScore);

// Problem -3

var number1 = 13;
var number2 = 79;
var number3 = 45;

if (number1 > number2 && number1 > number3) {
    console.log("Largest number is " + number1);
} else if (number2 > number3) {
    console.log("Largest numner is " + number2);
} else console.log("Largest number is " + number3);

// Problem 3b

var a = 9;
var b = 8;
var c = 9;

function tringleCaltulator(a, b, c) {
    if (a == b && b == c) {
        console.log("Traingle is not Isosceles");
    } else if (a == b || b == c || c == a) {
        console.log("Traingle is Isosceles");
    } else console.log("Traingle is not Isosceles");
}
tringleCaltulator(9, 8, 9);
