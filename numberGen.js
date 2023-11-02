// Writting the code to generate a random number for CPU and Player1 

const cards = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14]

// sorry I made the card array so long, but this was the only thing I could think of to mimic the probability of an actual deck, 
//as when I tried it before I got 14 3 times in a row!

let CPU = cards[Math.floor(Math.random() * cards.length)] // this works and Alex can use this variable as the card value... how do i make it so that number 14 shows up less than others?

let Player1 = cards[Math.floor(Math.random() * cards.length)] // 

// console.log(CPU)
// console.log(Player1)
 
console.log(cards.length)


