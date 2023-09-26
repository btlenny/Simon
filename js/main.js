// Constants:
const startButton = document.querySelector('#start-button'); // Get the start button element
const levelDisplay = document.querySelector('h2'); // Get the level display element
const topL = document.getElementById('tl'); // Get the top left tile element
const topR = document.getElementById('tr'); // Get the top right tile element
const bottomL= document.getElementById('bl'); // Get the bottom left tile element
const bottomR = document.getElementById('br'); // Get the bottom right tile element


// Variables:
let computerSequence = []; // An array to store the computer's sequence
let playerSequence = []; // An array to store the player's sequence
let level = 0; // A variable to keep track of the game level

// INTRO SONG
function playIntroSong() {
    // Create an audio element for the intro song and play it
    const introSong = new Audio('/audio/intro.wav'); 
    introSong.play();
}

// START BUTTON
// Start button disappears after click and Level appears
startButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hidden'); // Hide the start button
    const levelDisplay = document.querySelector('h2'); // Get the level display DOM
    levelDisplay.style.visibility = 'visible'; // Make the level display visible
    playIntroSong();
    setTimeout(() => {
        nextRound();
    }, 5000); // Delay before starting the next round (5 seconds)
}

// NEXT ROUND
function nextRound(){
    level++; //Increase leve by 1
    levelDisplay.textContent = `Level: ${level} of 10`; // Update the level display
    generateComputerSequence(); // Generate the computer's sequence
    setTimeout(() => {
        playComputerSequence();
    }, 1000) // Delay before playing the computer's sequence (1 second)
}

// GENERATE RANDOM SEQUENCE
const colors = ['tl', 'tr', 'bl', 'br']; // An array of color identifiers
function generateComputerSequence() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Randomly select a color
    computerSequence.push(randomColor); // Add the color to the computer's sequence
}

// PLAY SEQUENCE
const changeColorTone = {
    tl: changeColorTopL,
    tr: changeColorTopR,
    bl: changeColorBottomL,
    br: changeColorBottomR
};
function playComputerSequence() {
    playerSequence = []; // Reset player sequence
    let i = 0;
    const interval = setInterval(() => {
        const tileToHighlight = computerSequence[i];
        changeColorTone[tileToHighlight](); // Call the corresponding function to highlight the tile
        i++;
        if (i >= computerSequence.length) {
            clearInterval(interval);
            // Enable player input here
        }
    }, 1000); // Adjust the interval as needed to control the pace of the sequence
}

// PLAYER INPUT
topL.addEventListener('click', () => {
    handleTileClick('tl'); // Handle a click on the top left tile
});

topR.addEventListener('click', () => {
    handleTileClick('tr'); // Handle a click on the top right tile
});

bottomL.addEventListener('click', () => {
    handleTileClick('bl'); // Handle a click on the bottom left tile
});

bottomR.addEventListener('click', () => {
    handleTileClick('br'); // Handle a click on the bottom right tile
});

function handleTileClick(tile) {
    playerSequence.push(tile); // Add the clicked tile to the player's sequence

    if (!compareSequences()) {
        // Player made a mistake, trigger game over logic
        alert('Wrong color! Game over.');
        gameOver();
    } else if (playerSequence.length === computerSequence.length) {
        // Player completed the round
        setTimeout(nextRound, 1000); // Delay before starting the next round
    }
}

function compareSequences() {
    for (let i = 0; i < playerSequence.length; i++) {
        if (playerSequence[i] !== computerSequence[i]) {
            return false; // Player's input doesn't match computer's sequence
        }
    }
    return true; // Player's input matches computer's sequence so far
}

// END GAME
function gameOver() {
    // Implement game over logic (e.g., display a message, reset variables)
    // You might want to show the start button again
    startButton.classList.remove('hidden'); // Show the start button
    computerSequence = []; // Reset the computer's sequence
    playerSequence = []; // Reset the player's sequence
    level = 0; // Reset the level
    levelDisplay.textContent = ''; // Clear the level display
}

function displayWinMessage() {
    alert('Congratulations! You have won the game!'); // Display a win message
}

function handleWin() {
  level++;
  if (level <= 10) {
      levelDisplay.textContent = `Level: ${level} of 20`;
      generateComputerSequence();
      playComputerSequence();
  } else {
      // Player won the game (implement win logic)
      // Show a win message and reset the game
      // You can also offer a replay option
      displayWinMessage();
      gameOver();
  }
}

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






