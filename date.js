let date = new Date();
console.log(date);
let month = date.getMonth();
console.log(month);
let day = date.getDay();
console.log(day);

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agust', 'September',
    'October', 'November', 'December'];

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log("Today is: ", days[day]);

for (let i = 0; i < months.length; i++) {
    if (month == i) {
        console.log("Current month is: ", months[i]);
    }
}