
let sum = 0
let cards = []
let player = {
    name: "Per",
    chips: 150
}
let hasBlackJack = false
let isAlive =false
let msg = ""
let msgEl = document.getElementById("msg-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +": $"+player.chips
function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13)+1
    if(randomCard > 10){
        return 10
    }else if(randomCard === 1){
        return 11
    }else{
        return randomCard
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard , secondCard]
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i= 0; i < cards.length ; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: "+ sum
    if( sum <= 20){
        msg = "Do you want to draw a new card?"
    }else if( sum === 21){
        msg = "You've got Blackjack!"
        hasBlackJack = true
    }else{
        msg = "You're out of the game!"
        isAlive = false
    }
    console.log(msg)
    msgEl.textContent = msg
}

function newCards(){
    if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()
    }
    
}