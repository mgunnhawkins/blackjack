const input = require('readline-sync');
class Game {

    //has
    constructor() {
        this.deck = new Deck()
        this.deck.shuffle()
        this.players = [new Player()]
        this.dealerHand = []
        this.dealerTotal = 0



        // this.players = players
        // this.total = total
    }

    dealCard() {
        let card = this.deck.cards.pop();
        return card
        //card is an object
    }
    //creates a dealerHand by pushing 1 card to the dealerHand
    makeDealerHand(){
        let dealerHand = this.dealerHand
        dealerHand.push(this.dealCard())
    }

    calculateDealerTotal(){
        this.dealerTotal = 0;
        for (let card of this.dealerHand){
            this.dealerTotal = card.value + this.dealerTotal
        }
    }

    compareTotals(){
        if (this.dealerTotal > Player.total){
            console.log(`Bust!  You lose.`)
            this.playAgain()
        } else {
            console.log(`You win!`)
            this.playAgain()
        }
    }
    dealerPlay(){
        do {
            this.makeDealerHand()
            this.calculateDealerTotal()
        } while(this.dealerTotal < 17);

        console.log(`\n This is the dealer's hand:`)
        this.dealerHand.forEach(card => console.log(card.rank, "of", card.suit))
        console.log(`\n This is the dealer's total:`)
        console.log(this.dealerTotal)
        
        if (this.dealerTotal > 21){
            console.log(`The dealer's total is over 21.  You win!`)
            this.playAgain()
        } else if (this.dealerTotal == 21){
            console.log(`Dealer's total is 21.  You lose.`)
            this.playAgain()
        } else if (this.dealerTotal > 17 && this.dealerTotal < 21) {
            this.compareTotals()
        }
    }


    play(){
            console.log("Welcome to Blackjack!\n")
            console.log(`This is the dealerHand: `)
            this.makeDealerHand() 
            this.dealerHand.forEach(card => console.log(card.rank, "of", card.suit))
            console.log(`\n This is the playerHand: `)
            let player = new Player()
            player.firstDeal()
            player.calculateTotal()
            console.log(`\nThis is your total:`)
            console.log(player.total)
            while (player.hitChoice() == true){
                player.hit()
            } 
            this.dealerPlay()
        }
        
     playAgain(){
        let playChoice = input.question("\nDo you want to play again? ")
         if (playChoice == "no") {
             console.log("Thanks for playing!")
         } else {
            let game = new Game ()
            game.play()
         }
    }

} //end of Game Class


//creates a card
class Card {
    constructor(suit, value) {
        this.suit = suit
        this.rank = rank
        this.value = value
    }

    
    //ace is 1 or 11

} //end of card class

class Deck {
    constructor() {
        this.cards = []
        this.createDeck()
    }

    //creates a deck of cards
    createDeck() {
        let cards = []
        let suits = ["clubs", "hearts", "spades", "diamonds"]
        let ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
        suits.forEach(function(suit) {
            for (let i = 0; i < ranks.length; i++) {
                cards.push({ suit: suit, rank: ranks[i], value: values[i] })
            }
        });
        this.cards = cards
    }

    //shuffles a deck of cards
    shuffle() {
        this.cards = this.cards.sort(() => Math.random() - 0.5)
    }
} //end of Deck Class

class Player {
    constructor() {
        this.hand = []
        this.playerNum = 0
        this.total = 0
        // this.hit = hit()
    }

    //pushes 1 card into the player's hand
    makeHand(){
        let playerHand = this.hand
        playerHand.push(game.dealCard())
        
    }

   
    //uses makeHand() to push 2 cards into the players hand
    firstDeal(){
       this.makeHand()
       this.makeHand()
       this.hand.forEach(card => console.log(card.rank, "of", card.suit))
    }
   
    
    calculateTotal(){
        this.total = 0
        for (let card of this.hand){
            this.total = card.value + this.total
        }
    }


    hitChoice(){
        let hitChoice = input.question("\n Do you want to hit or stay? ")
        
       if (hitChoice == "hit"){
            return true;
        } else if (hitChoice == "stay") {
            return false;
        }
    }

    hit(){
        
            this.makeHand()
            console.log(`This is your new hand:`)
            this.hand.forEach(card => console.log(card.rank, "of", card.suit) )
            console.log(`This is your new total:`)
            this.calculateTotal()
            console.log(this.total)
            if (this.total > 21){
                console.log("Your total is over 21.  Bust!  You lose the game.")
                game.playAgain() 
            } else if (this.total == 21){
                console.log("Congrats!  You win!")
                game.playAgain()
            } else if (this.total < 21){
                this.hitChoice()
            }
    }



} //end of player class
//first iteration of the game

    let game = new Game()
    game.play();



//begin cycle of the game

    




//else if (player.hit == false){
//     console.log("The dealer's cards are:")
//     //dealer hand
//     console.log("The dealer's total is:") 
//     //dealer total
//     if (player.calculateTotal() <= 21 && player.calculateTotal() > dealer.calculateTotal()) {
//         console.log("Congrats!  You won!!")
//     } else if (dealer.calculateTotal() <= 21 && dealer.calculateTotal() > )
// }





//total   
//hit method
//stay method
//logic for handling Ace














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