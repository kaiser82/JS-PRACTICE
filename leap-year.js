
function leapYearCalculator(years) {
    if ((years % 4 == 0) && (years % 100 != 0) || (years % 400 == 0)) {
        return true;
    }
    return false;
}

let years = [2023, 2024, 2025, 2028, 2030]

function leapYears(years_list) {
    let leapyears = [];
    for (let i = 0; i < years_list.length; i++) {
        let check = leapYearCalculator(years_list[i]);
        if (check == true) {
            leapyears.push(years_list[i]);
        }
    }
    return leapyears;
}

let finalResult = leapYears(years);
console.log(finalResult);