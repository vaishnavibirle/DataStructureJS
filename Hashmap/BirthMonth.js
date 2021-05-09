/**Generating birth month of 50 individuals
 * Between year 92 & 93
 * Finding individuals having birthdays in same month
 * Printing result
 */


let persons = new Map();

for (i = 1; i <= 50; i++) {
    let m = (Math.floor(Math.random() * 12) + 1);
    persons.set(i, m);
}
for (let i = 1; i <= 12; i++) {
    let peopleInSameMonth = new Array();
    for (let [key, value] of persons) {
        if (value == i)
            peopleInSameMonth.push(key);
    }
    console.log("People born in " + getMonthName(i) + ": " + peopleInSameMonth);
}

function getMonthName(monthNum) {
    switch (monthNum) {
        case 1: return "January";
        case 2: return "February";
        case 3: return "March";
        case 4: return "April";
        case 5: return "May";
        case 6: return "June";
        case 7: return "July";
        case 8: return "August";
        case 9: return "September";
        case 10: return "October";
        case 11: return "November";
        case 12: return "December";
    }
}