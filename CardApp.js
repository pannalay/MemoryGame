document.addEventListener('DOMContentLoaded',createGameBoard); 
const cardArray = [
    {
        name: "condemn",
        image: "images/condemn.png" },
    {
        name: "condemn",
        image: "images/condemn.png" },
    {
        name: "flurry",
        image: "images/flurry.png" },
    {
        name: "flurry",
        image: "images/flurry.png" },
    {
        name: "kindling",
        image: "images/kindling.png" },
    {
        name: "kindling",
        image: "images/kindling.png" },
    {
        name: "pride",
        image: "images/pride.png" },
    {
        name: "pride",
        image: "images/pride.png" },
    {
        name: "sunwell",
        image: "images/sunwell.png" },
    {
        name: "sunwell",
        image: "images/sunwell.png" },
    {
        name: "tavish",
        image: "images/tavish.png" },
    {
        name: "tavish",
        image: "images/tavish.png" },
    {
        name: "zul",
        image: "images/zul.png"},
    {
        name: "zul",
        image: "images/zul.png"},
    {
        name: "emeriss",
        image: "images/emeriss.png"},
    {
        name: "emeriss",
        image: "images/emeriss.png"},
    {
        name: "mira",
        image: "images/mira.png"},
    {
        name: "mira",
        image: "images/mira.png"},
    {
        name: "blur",
        image: "images/blur.png"},
    {
        name: "blur",
        image: "images/blur.png"},
    {
        name: "stardust",
        image: "images/stardust.png"},
    {
        name: "stardust",
        image: "images/stardust.png"},
    {
        name: "divine",
        image: "images/divine.png"},
    {
        name: "divine",
        image: "images/divine.png"},

]

function createGameBoard() {
    let gameboard = document.getElementById('gameBoard');

    let gridContainer = document.createElement('div');
    gridContainer.className = 'grid';

    for(let i=0;i <24; i++){ 
        let item = document.createElement('div');
        item.className = 'item';

        let card = document.createElement('img');
        card.setAttribute('src','images/card_back.png');
        card.setAttribute('id',i);
        
        card.setAttribute('width','100px');

        card.addEventListener('click',flipCard); 

        item.appendChild(card);
        gridContainer.appendChild(item);
    }
    gameboard.appendChild(gridContainer);
    cardArray.sort(() => 0.5 - Math.random());
}

let cardChoosen = [] 
let cardChoosenId = []
let score=0


function flipCard() {
    let cardId = this.getAttribute('id'); 
    this.setAttribute('src',cardArray[cardId].image);
    cardChoosen.push(cardArray[cardId]);
    cardChoosenId.push(cardId); 
    if(cardChoosen.length === 2){ 
        document.getElementById('gameConsole').textContent = "Checking...";
        setTimeout(checkForMatch,500); 
    }
}


function checkForMatch() { 
    const cards = document.querySelectorAll('img');

    let selectedCardOne = cardChoosenId[0];
    let selectedCardTwo = cardChoosenId[1];

    let consoleMessage = "";
    
    if(cardChoosen[0].name == cardChoosen[1].name){ 
        cards[selectedCardTwo].style.display = "none";
        cards[selectedCardOne].style.display = "none";
        // cards[selectedCardTwo].setAttribute('src','images/white.png');
        // cards[selectedCardOne].setAttribute('src','images/white.png');
        score = score + 1;
        consoleMessage = "Your found a match";
    }else{
        cards[selectedCardTwo].setAttribute('src','images/card_back.png');
        cards[selectedCardOne].setAttribute('src','images/card_back.png');
        consoleMessage = "Sorry, try again...:(";
    }

    document.getElementById('gameScore').textContent = score;
    document.getElementById('gameConsole').textContent = consoleMessage;

    cardChoosen = [];
    cardChoosenId = [];

    if (score === cardArray.length / 2) { 
        document.getElementById('gameConsole').textContent = "Congratulations!";
    }
}