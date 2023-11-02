// Writting the code to generate a random number for CPU and Player1 

const cardsValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// function cardForCPU() {
//     let CPU = cardsValue[Math.floor(Math.random() * cardsValue.length)]

// }

let CPU = cardsValue[Math.floor(Math.random() * cardsValue.length)] // this works and Alex can use this variable as the card value... how do i make it so that number 14 shows up less than others?

let Player1 = cardsValue[Math.floor(Math.random() * cardsValue.length)] // 

console.log(CPU)
console.log(Player1)


