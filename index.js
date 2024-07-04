// Code your solutions in this file

// *** SYNTAX FOR A FOR LOOP ***
// for ([initialization]; [condition]; [iteration(increment/decrement)]) {
//     [loop body]
//   }
// loop executes when condition is true, exits once it becomes false
// *** NB!!: USED WHEN YOU KNOW HOW MANY TIMES YOU WANT THE LOOP TOO RUN ***

for (let age = 30; age < 40; age++) {
    console.log(`i am ${age} years old. Happy birthday to me!`);
    debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bowl!`);
    }
    return gifts;
}
wrapGifts(gifts);


const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(array, event) {
    const messages = [];
    for (let i = 0; i < array.length; i++) {
        messages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}
writeCards(names, "surprise");

function countDown(number) {
    parseInt(number, 10);
    while (number > -1) {
        console.log(number--);
    }
}
console.log(countDown(11));