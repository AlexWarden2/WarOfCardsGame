Making file to start the project: 
## War of Cards 

//How to play: shuffle playing cards and deal out all the cards (including the joker)
// Both players will simultaneously flip the top card, compare the two cards and which ever is higher will collect both cards
// if the cards flipped are the same leads to a war. then each player will set down three more cards and flip the top card face up
// compare the two and the one thats the highest and wins all the cards (including the face down ones)
// if the cards tie again, then we flip the second card, and the we have a war again (as in place three more cards and compare the third card)
// if a player does not have three more cards to put down, then they lose the war and the other player wins. 
// AIM: the first player that collects all the cards wins 

//First we need to create a deck of Cards. The jokers are also included in the game so 52 + 2 
// Saw online that we can do this by creating an array for the suits and an array for the individual cards 
// e.g., const suits = ["spades", "diamonds", "clubs", "hearts"];
// e.g., const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; 
// to create the deck we want to pair each of the values with each of the suits...(what about the joker?) 


### Things to build

## Make a random number generator 
- need number generator from 1 - 14 
- may also need to consider 2 jokers, 52 cards 
- joker will need to be half as common as other cards

- CPU
- Player1

## make a README.md to tell user how to play
- basic instructions 



## play/game engine 
- compare cards, +/- score from each player 
- start on 27 points starting 
- add rule for war - matching card value - next go +/- need condition for how points are dealt out 
- 4 more points to play for from each player when war is active 

## score 
- may have a live score displyed on screen after each go 
- will already be tracked but will need printing to console 
- win conditions also built into this 
