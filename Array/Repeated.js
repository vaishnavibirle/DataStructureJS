repeatedDigits = [];

/**Taking range between 0 - 100 to print repeated digits */
for (let i = 10; i <= 100; i++) {
    const reverse = (i) => parseInt(String(i)
        .split("")
        .reverse()
        .join(""), 10);
    if (i == reverse(i)) {
        repeatedDigits.push(i);
    }
}

console.log("The repeated numbers in the range of 0-100 are : \n" + repeatedDigits);