// Constants:

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

let sequence = [];
let playerSequence = [];
let level = 1;
let audio = [];


// Begin Sequence:
// 1a. Start button disapears after click and Level appears
function startGame(){
    startButton.classList.add('hidden');
    const levelDisplay = document.querySelector('h2');
    levelDisplay.style.visibility = 'visible';
    //start round
}
startButton.addEventListener('click', startGame);

// 1b. start sequence
function addToSequence() {
    const tiles = [topL, topR, bottomL, bottomR]; // Array of your tiles
    const randomIndex = Math.floor(Math.random() * 4); // Generate a random index (0-3)
    const randomTile = tiles[randomIndex]; // Get a random tile
    sequence.push(randomTile); // Add the random tile to the sequence
  }
  
  // Function to display the sequence to the player
  function displaySequence() {
    for (let i = 0; i < sequence.length; i++) {
      const tile = sequence[i];
      setTimeout(() => {
        // Highlight the tile and play a tone
        highlightTile(tile);
        playTone(tile);
      }, i * 1000); // Display each tile for 1 second (adjust timing as needed)
    }
  }
  
  // Call these functions to start the game
  function startRound() {
    addToSequence();
    displaySequence();
  }
  


// 1b. The tile selected will light up and animate


// 1c. A tone will be heard to match with the corresponding color tile
// 1d. The sequence will continue to add +1 random tile to the sequence everytime the player chooses correctly





// Player Begin:
// 2a Player will click a tile to match the sequence chose
// 2b The tile selected will light up and animate
// 2c A tone will be heard to match with the corresponding color tile

// EndGame:
// 3a If the player does not follow the sequence, the game will stop - or - If player does choose correctly the sequence should continue and add +1 random tile to the sequence until they’ve reached level 20.


// TOP LEFT highlight when clicked

topL.addEventListener('click', changeColorTopL);

function changeColorTopL() {
  
    const tlCell = document.getElementById('tl');
    tlCell.style.boxShadow = '0 0 50px yellow';
    tlCell.style.transform = 'translateY(5px)';
   

    setTimeout(function () {
        tlCell.style.boxShadow = '0 0 0 1px #ffb900 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 #c28e07, 0 8px 0 1px rgba(0, 0, 0, 0.4), 0 8px 8px 1px rgba(0, 0, 0, 0.5)';
        tlCell.style.transform = 'translateY(0px)';
    }, 300);
}

// TOP RIGHT highlight when clicked
topR.addEventListener('click', changeColorTopR);

function changeColorTopR() {
   
    const trCell = document.getElementById('tr');
    trCell.style.boxShadow = '0 0 50px red';
    trCell.style.transform = 'translateY(5px)';

    setTimeout(function () {
        trCell.style.boxShadow = '0 0 0 1px rgb(179, 42, 34), 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 rgb(179, 42, 34), 0 8px 0 1px rgba(0, 0, 0, 0.4), 0 8px 8px 1px rgba(0, 0, 0, 0.5)';
        trCell.style.transform = 'translateY(0px)';
    }, 300); 
}

//BOTTOM LEFT highlight when clicked
bottomL.addEventListener('click', changeColorBottomL);

function changeColorBottomL() {
   
    const blCell = document.getElementById('bl');
    blCell.style.boxShadow = '0 0 50px chocolate';
    blCell.style.transform = 'translateY(5px)';

    setTimeout(function () {
        blCell.style.boxShadow = '0 0 0 1px rgb(255, 114, 52), 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 rgb(255, 114, 52), 0 8px 0 1px rgba(0, 0, 0, 0.4), 0 8px 8px 1px rgba(0, 0, 0, 0.5)'; 
        blCell.style.transform = 'translateY(0px)';
    }, 300); 
}

// BOTTOM RIGHT highlight when clicked
bottomR.addEventListener('click', changeColorBottomR);

function changeColorBottomR() {
    
    const brCell = document.getElementById('br');
    brCell.style.boxShadow = '0 0 50px blue';
    brCell.style.transform = 'translateY(5px)';

    setTimeout(function () {
        brCell.style.boxShadow = '0 0 0 1px rgb(36, 74, 181), 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 rgb(36, 74, 181), 0 8px 0 1px rgba(0, 0, 0, 0.4), 0 8px 8px 1px rgba(0, 0, 0, 0.5)';
        brCell.style.transform = 'translateY(0px)'; 
    }, 300); 
}






