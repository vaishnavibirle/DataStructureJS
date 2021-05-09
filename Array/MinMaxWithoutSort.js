var randomArray = new Array();
for (i = 0; i <= 10; i++) {
    randomArray[i] = Math.floor(Math.random() * 899 + 100);
}

console.log(randomArray);

firstGreatest = Math.max.apply(null, randomArray);
firstSmallest = Math.min.apply(null, randomArray);

// for (let randomNum of randomArray) {
//     if (randomNum > firstGreatest)
//         firstGreatest = randomNum;
//     if (randomNum < firstSmallest)
//         firstSmallest = randomNum;
// }

secondGreatest = firstSmallest;
secondSmallest = firstGreatest;

for (let randomNum of randomArray) {
    if (randomNum < firstGreatest && randomNum > secondGreatest)
        secondGreatest = randomNum;
    if (randomNum > firstSmallest && randomNum < secondSmallest)
        secondSmallest = randomNum;
}

console.log("Second Greatest number: " + secondGreatest + "\nSecond Smallest number: " + secondSmallest);