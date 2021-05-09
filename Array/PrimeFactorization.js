var userInput = require("readline-sync");

/**Resulting prime factors in an array */
function primeFactors(number) {
    const factors = [];
    for (i = 2; i <= userInputNum; i++) {
        if (userInputNum % i == 0) {
            var flag = 0;
            for (j = 2; j * j <= i; j++) {
                if (i % j == 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag == 0) {
                factors.push(i);
            }
        }
    }
    return factors
}

userInputNum = parseInt(userInput.question("Enter number: "));
console.log("Prime factors for " + userInputNum + " are: " + primeFactors(userInputNum));