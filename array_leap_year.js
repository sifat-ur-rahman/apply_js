function getYear(years) {
    let leapYear = [];
    for (let i = 0; i < years.length; i++) {
        const index = i;
        const year = years[index]
        if (year % 4 === 0) {
            leapYear.push(year);
        }
        return leapYear

    }
}

const myNumbers = [2020, 2023, 2024, 2025, 2028, 2030];
const leapYear = getYear(myNumbers)
console.log(leapYear)