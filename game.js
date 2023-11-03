/* 
Will take 2 arguments each round:
 - CPU
 - Player1

 These will both be numbers - but should have interface for tarnslating them into picture cards where relevant 

 will need a y/n to keep the loop going for eeach round to stop it immediatley finishing
 
 must be merged by 1pm tomorrow

 would be insanely hard version where it keeps track of which card from each array on each players hand - I dont think this was the idea when game suggested as medium 

 may be possible - will need array of 4 of each number and two jokers 
 will then need to keep track of each array and a serperate play array that gets added to winners hand each time 

*/ 

const prompt = require('prompt-sync')();

const cards = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14]

const CPU = () => {
    return cards[Math.floor(Math.random() * cards.length)]
 } // this works and Alex can use this variable as the card value... how do i make it so that number 14 shows up less than others?

const CPUout = (num) => {
    if (num === 1) {
        return `Ace`
    } else if ( num === 11) {
        return `Jack`
    } else if ( num === 12) {
        return `Queen`
    } else if ( num === 13) {
        return `King`
    } else if ( num === 14) {
        return `Joker`
    } else {
        return num
    }
}

 const Player1 = () => {
    return cards[Math.floor(Math.random() * cards.length)]
 } 

// const {Player1} = require('./cards');
// const {CPU} = require('./cards');


let winner = 54;
let humanScore = 27;
let computerScore = 27;

function initialiseGame() {
    let playerPrompt = prompt(' Play a hand Y/N: ')
    if (playerPrompt ==='Y' || playerPrompt ==='y' ){
        let playerSelection = Player1();
        let computerSelection = CPU();
  
        let msg = playRound(playerSelection, computerSelection);
            console.log(msg);
        if (humanScore <= 53 && computerScore <= 53) {
            console.log('Current score: Human: ', humanScore, ' Computer: ', computerScore)
            setTimeout(initialiseGame, 0);
    }   else {
            console.log(win_condition());
    }   
    }
  }

  function playRound(player, computer) {
    if (player> computer) {
        humanScore += 1;
        computerScore -= 1;
        return CPUout(player) + ' wins vs ' + CPUout(computer) + '. Congratulations!';
    } else if (player < computer) {
        humanScore -= 1;
        computerScore += 1;
        return CPUout(player) + ' looses vs ' + CPUout(computer)+ '. Unlucky!';
    } else if (player == computer) {
        console.log(`WE HAVE A WAR!`)

        let warPlayer = Player1();
        let warCPU = CPU();

        if (warPlayer> warCPU) {
            humanScore += 4;
            computerScore -= 4;
            return CPUout(warPlayer) + ' wins vs ' + CPUout(warCPU) + '. Congratulations!';
        }else if (warPlayer < warCPU) {
            humanScore -= 4;
            computerScore += 4;
            return CPUout(warPlayer) + ' looses vs ' + CPUout(warCPU) + '. Unlucky!';
    }
  }
}


function win_condition() {
  if (humanScore > 53) {
    return 'Player Wins!';
  }
  if (computerScore > 53) {
    return 'Computer wins!';
  }
}


initialiseGame();
