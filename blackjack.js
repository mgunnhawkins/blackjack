//TODO IMPORTS NEEDED
const input = require('readline-sync');

class Card {
    constructor(suit, value){
        this.suit = suit
        this.rank = rank
        this.value = value
  }

//user will see suit and rank
//total will use value instead of rank
//ace is 1 or 11
   
}
  
class Deck{
    constructor(){
        this.cards = []
    }
    createDeck() {
        let cards = []
        let suits = ["club", "heart", "spade", "diamond"]
        let ranks = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"]
        let values = [1,2,3,4,5,6,7,8,9,10,10,10,10]
        suits.forEach(function(suit) {
            for(let i=0; i < ranks.length; i++){
                this.cards.push({suit:suit, rank:ranks[i], value:values[i]})
            }
        });
        return this.cards 
    }   
}
  
    
   






// console.log(clubs, hearts, spades, diamonds);
// let cardChoice = Math.random(cards.suit)
// console.log(cardChoice);

// let chooseCards() {
// }  
    
// runProgram(){
//     let playerChoice = input.question("Hit or stay?")
//     console.log (playerChoice)
// }

//multiarray with all cards named deck
//empty array named player that cards go into to make the hand.  
//total of player's hand needed each time

// Each player starts with two cards, one of the dealer's cards is hidden until the end.
    //array needs to pull 2 cards out of the array and give to the user

// To 'Hit' is to ask for another card. To 'Stand' is to hold your total and end your turn.
    //prompt user to write hit or stand
    //if hit then pull out another card out of the deck and push to the player.  Then prompt user again for hit or stand
    //if stand then leave alone

// If you go over 21 you bust, and the dealer wins regardless of the dealer's hand.
    //if over 21 then bust
// If you are dealt 21 from the start (Ace & 10), you got a blackjack.

