var randomArray = new Array();
for (i = 0; i < 10; i++) {
    randomArray[i] = Math.floor(Math.random() * 899 + 100);
}

randomArray.sort();
console.log(randomArray);

console.log("Second Greatest number: " + randomArray[randomArray.length - 2] + "\nSecond Smallest number: " + randomArray[1]);