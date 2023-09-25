// Constants:
const startButton = document.querySelector('#start-button')
const topL = document.getElementById('tl');
const topR = document.getElementById('tr');
const bottomL= document.getElementById('bl');
const bottomR = document.getElementById('br');

// Variables:
let computerSequence = [];
let playerSequence = [];
let level = 0;

// INTRO SONG
function playIntroSong() {
    const introSong = new Audio('/audio/intro.wav'); 
    introSong.play();
  }
  
//START BUTTON
// 1a. Start button disapears after click and Level appears
startButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hidden'); 
    const levelDisplay = document.querySelector('h2'); 
    levelDisplay.style.visibility = 'visible'; 
    playIntroSong();
    setTimeout(() => {
        generateSequence();
        playSequence();
        }, 5000);
    }

//GENERATE SEQUENCE
// Function to generate a random sequence
const computerEventListeners = [
    changeColorTopL,
    changeColorTopR,
    changeColorBottomL,
    changeColorBottomR,
  ];
  
function generateSequence() {
  const randomSequence = Math.floor(Math.random() * computerEventListeners.length);
  computerSequence.push(randomSequence);
  level++;
  updateLevelDisplay();
  // return computerEventListeners[randomSequence]();
}
 
//UPDATE LEVEL DISPLAY
function updateLevelDisplay() {
  const levelDisplay = document.querySelector('h2');
  levelDisplay.textContent = `Level: ${level} of 20`;
}

// PLAY SEQUENCE

 
//USER SEQUENCE

// Enable player input

// Player Begin:
// 2a Player will click a tile to match the sequence chose

// 2b The tile selected will light up and animate
// 2c A tone will be heard to match with the corresponding color tile

// EndGame:
// 3a If the player does not follow the sequence, the game will stop - or - If player does choose correctly the sequence should continue and add +1 random tile to the sequence until they’ve reached level 20.



















// COLOR and ANIMATE
// TOP LEFT highlight and play sound when clicked
topL.addEventListener('click', changeColorTopL);

function playToneTopL() {
    tone1.src = '/audio/Cnote.wav';
    tone1.play();
  }
  
function changeColorTopL() {
    const tlCell = document.getElementById('tl');
    tlCell.style.boxShadow = '0 0 50px yellow';
    tlCell.style.transform = 'translateY(5px)';
    playToneTopL()
    setTimeout(function () {
        tlCell.style.boxShadow = '0 0 0 1px #ffb900 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 #c28e07, 0 8px 0 1px rgba(0, 0, 0, 0.4), 0 8px 8px 1px rgba(0, 0, 0, 0.5)';
        tlCell.style.transform = 'translateY(0px)';
    }, 300);
}

// TOP RIGHT highlight and play sound when clicked
topR.addEventListener('click', changeColorTopR);

function playToneTopR() {
    tone2.src = '/audio/Enote.wav';
    tone2.play();
  }

function changeColorTopR() {
    const trCell = document.getElementById('tr');
    trCell.style.boxShadow = '0 0 50px red';
    trCell.style.transform = 'translateY(5px)';
    playToneTopR();
    setTimeout(function () {
        trCell.style.boxShadow = '0 0 0 1px rgb(179, 42, 34), 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 rgb(179, 42, 34), 0 8px 0 1px rgba(0, 0, 0, 0.4), 0 8px 8px 1px rgba(0, 0, 0, 0.5)';
        trCell.style.transform = 'translateY(0px)';
    }, 300); 
}

//BOTTOM LEFT highlight and play sound when clicked
bottomL.addEventListener('click', changeColorBottomL);
function playToneBottomL() {
    tone3.src = '/audio/Gnote.wav';
    tone3.play();
  }

function changeColorBottomL() {
    const blCell = document.getElementById('bl');
    blCell.style.boxShadow = '0 0 50px chocolate';
    blCell.style.transform = 'translateY(5px)';
    playToneBottomL();
    setTimeout(function () {
        blCell.style.boxShadow = '0 0 0 1px rgb(255, 114, 52), 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 rgb(255, 114, 52), 0 8px 0 1px rgba(0, 0, 0, 0.4), 0 8px 8px 1px rgba(0, 0, 0, 0.5)'; 
        blCell.style.transform = 'translateY(0px)';
    }, 300); 
}

// BOTTOM RIGHT highlight and play sound when clicked
bottomR.addEventListener('click', changeColorBottomR);
function playToneBottomR() {
    tone4.src = '/audio/Bnote.wav'; 
    tone4.play();
  }
  
function changeColorBottomR() {
    const brCell = document.getElementById('br');
    brCell.style.boxShadow = '0 0 50px blue';
    brCell.style.transform = 'translateY(5px)';
    playToneBottomR();
    setTimeout(function () {
        brCell.style.boxShadow = '0 0 0 1px rgb(36, 74, 181), 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 rgb(36, 74, 181), 0 8px 0 1px rgba(0, 0, 0, 0.4), 0 8px 8px 1px rgba(0, 0, 0, 0.5)';
        brCell.style.transform = 'translateY(0px)'; 
    }, 300); 
}






