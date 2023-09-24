// Constants:
// - colors blocks
// - start button
// - win alert
// - lose alert
const startButton = document.querySelector('#start-button')


const topL = document.getElementById('tl');
const topR = document.getElementById('tr');
const bottomL= document.getElementById('bl');
const bottomR = document.getElementById('br');

const tone1 = new Audio();
const tone2 = new Audio();
const tone3 = new Audio();
const tone4 = new Audio();



// Variables:
// -level display
// -sequence
// -player selection

let sequence = [];
let playerSequence = [];
let initialLevel = 0;
let levelCounter = 0;
let audio = [];


// Event Listeners:


// Cached Elements:
// -start button
// -tiles
// - sequence
// - level display

// Begin Sequence:
// 1a. After hitting the start button, the sequence will begin with a random selection of 1 or 4 tiles

// 1b. The tile selected will light up and animate

// TOP LEFT highlight when clicked

topL.addEventListener('click', changeColorTopL);

function changeColorTopL() {
  
    const tlCell = document.getElementById('tl');
    tlCell.style.boxShadow = '0 0 50px yellow';

    setTimeout(function () {
        tlCell.style.boxShadow = '0 0 0 1px #ffb900 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 #c28e07, 0 8px 0 1px rgba(0, 0, 0, 0.4), 0 8px 8px 1px rgba(0, 0, 0, 0.5)'; // Change the boxShadow property
    }, 300); 
}

//TOP RIGHT highlight when clicked
topR.addEventListener('click', changeColorTopR);

function changeColorTopR() {
   
    const trCell = document.getElementById('tr');
    trCell.style.boxShadow = '0 0 50px red';

    setTimeout(function () {
        trCell.style.boxShadow = '0 0 0 1px rgb(179, 42, 34), 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 rgb(179, 42, 34), 0 8px 0 1px rgba(0, 0, 0, 0.4), 0 8px 8px 1px rgba(0, 0, 0, 0.5)'; // Change the boxShadow property
    }, 300); 
}

//BOTTOM LEFT highlight when clicked
bottomL.addEventListener('click', changeColorBottomL);

function changeColorBottomL() {
   
    const blCell = document.getElementById('bl');
    blCell.style.boxShadow = '0 0 50px chocolate';

    setTimeout(function () {
        blCell.style.boxShadow = '0 0 0 1px rgb(255, 114, 52), 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 rgb(255, 114, 52), 0 8px 0 1px rgba(0, 0, 0, 0.4), 0 8px 8px 1px rgba(0, 0, 0, 0.5)'; // Change the boxShadow property
    }, 300); 
}

//BOTTOM RIGHT highlight when clicked
bottomR.addEventListener('click', changeColorBottomR);

function changeColorBottomR() {
    
    const brCell = document.getElementById('br');
    brCell.style.boxShadow = '0 0 50px blue';

    setTimeout(function () {
        brCell.style.boxShadow = '0 0 0 1px rgb(36, 74, 181), 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 rgb(36, 74, 181), 0 8px 0 1px rgba(0, 0, 0, 0.4), 0 8px 8px 1px rgba(0, 0, 0, 0.5)'; // Change the boxShadow property
    }, 300); 
}

// 1c. A tone will be heard to match with the corresponding color tile
// 1d. The sequence will continue to add +1 random tile to the sequence everytime the player chooses correctly





// Player Begin:
// 2a Player will click a tile to match the sequence chose
// 2b The tile selected will light up and animate
// 2c A tone will be heard to match with the corresponding color tile

// EndGame:
// 3a If the player does not follow the sequence, the game will stop - or - If player does choose correctly the sequence should continue and add +1 random tile to the sequence until they’ve reached level 20.








