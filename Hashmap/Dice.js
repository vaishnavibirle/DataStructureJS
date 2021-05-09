/**Rolling and die
 * Rolling repeatedly and finding result
 * storing result in dictionary
 * repeating till limit reached 10 times
 * finding maximum and minimum times
 */

let diceRollFor6Num = new Map([
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0]
]);

while (Array.from(diceRollFor6Num.values()).includes(10) != true) {
    let diceRoll = Math.floor(Math.random() * 6 + 1);
    diceRollFor6Num.set(diceRoll, diceRollFor6Num.get(diceRoll) + 1);
}
console.log(diceRollFor6Num);
for (let [key, value] of diceRollFor6Num) {
    if (value == Math.max(...diceRollFor6Num.values()))
        console.log("Number that reached maximum: " + key + "-" + value);
    if (value == Math.min(...diceRollFor6Num.values()))
        console.log("Number that reached minimum: " + key + "-" + value);
}