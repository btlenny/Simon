// Constants:
const startButton = document.querySelector('#start-button');
const levelDisplay = document.querySelector('h2');
const topL = document.getElementById('tl');
const topR = document.getElementById('tr');
const bottomL = document.getElementById('bl');
const bottomR = document.getElementById('br');
// Variables:
let computerSequence = [];
let playerSequence = [];
let level = 0;
let gameStarted = false;
// INTRO SONG
function playIntroSong() {
	const introSong = new Audio('audio/intro.wav');
	introSong.play();
}
// START BUTTON
startButton.addEventListener('click', startGame);

function startGame() {
	startButton.classList.add('hidden');
	const levelDisplay = document.querySelector('h2');
	levelDisplay.style.visibility = 'visible';
	playIntroSong();
	setTimeout(() => {
		nextRound();
	}, 5000);
	gameStarted = true;
}
//NEXT ROUND
function nextRound() {
	level++;
	levelDisplay.textContent = `Level: ${level} of 14`;
	generateComputerSequence();
	playerSequence = [];
	setTimeout(() => {
		playComputerSequence();
	}, 1000);
	if (level === 15) {
		handleWin();
	}
}
// GENERATE RANDOM COMPUTER SEQUENCE
const colors = ['tl', 'tr', 'bl', 'br']; // 
function generateComputerSequence() {
	const randomColor = colors[Math.floor(Math.random() * colors.length)]; // 
	computerSequence.push(randomColor);
}
// PLAY COMPUTER SEQUENCE
const changeColorTone = {
	tl: changeColorTopL,
	tr: changeColorTopR,
	bl: changeColorBottomL,
	br: changeColorBottomR
};

function playComputerSequence() {
	let i = 0;

	function playNextStep() {
		if (i < computerSequence.length) {
			const colorToneChange = computerSequence[i];
			changeColorTone[colorToneChange]();
			i++;
			setTimeout(playNextStep, 1000);
		}
	}
	playNextStep();
}
// PLAYER SEQUENCE
topL.addEventListener('click', handleTileTopLClick);
topR.addEventListener('click', handleTileTopRClick);
bottomL.addEventListener('click', handleTileBottomLClick);
bottomR.addEventListener('click', handleTileBottomRClick);

function handleTileTopLClick() {
	if (gameStarted) {
		handleTileClick('tl');
	}
}

function handleTileTopRClick() {
	if (gameStarted) {
		handleTileClick('tr');
	}
}

function handleTileBottomLClick() {
	if (gameStarted) {
		handleTileClick('bl');
	}
}

function handleTileBottomRClick() {
	if (gameStarted) {
		handleTileClick('br');
	}
}

function handleTileClick(tile) {
	playerSequence.push(tile);
	if (compareSequences() === false) {
		alert('Oops! Game over.');
		gameOver();
	} else if (playerSequence.length === computerSequence.length) {
		setTimeout(nextRound, 1000);
	}
}
// COMPARE PLAYER INPUT TO COMPUTER
function compareSequences() {
	for (let i = 0; i < playerSequence.length; i++) {
		if (playerSequence[i] !== computerSequence[i]) {
			return false;
		}
	}
	return true;
}
// END GAME
function gameOver() {
	startButton.classList.remove('hidden');
	computerSequence = [];
	playerSequence = [];
	level = 0;
	levelDisplay.textContent = '';
}

function handleWin() {
	alert('Congrats! You have won the game!');
	gameOver();
}
// ----------------------------- ANITMATE BUTTON AND CHANGE COLOR -------------------------------//
// TOP LEFT highlight and play sound when clicked
topL.addEventListener('click', changeColorTopL);

function playToneTopL() {
	tone1.src = 'audio/Cnote.wav';
	tone1.play();
}

function changeColorTopL() {
	const tlCell = document.getElementById('tl');
	tlCell.style.boxShadow = '0 0 50px yellow';
	tlCell.style.transform = 'translateY(5px)';
	playToneTopL()
	setTimeout(function() {
		tlCell.style.boxShadow = '0 0 0 1px #ffb900 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 #c28e07, 0 8px 0 1px rgba(0, 0, 0, 0.4), 0 8px 8px 1px rgba(0, 0, 0, 0.5)';
		tlCell.style.transform = 'translateY(0px)';
	}, 300);
}
// TOP RIGHT highlight and play sound when clicked
topR.addEventListener('click', changeColorTopR);

function playToneTopR() {
	tone2.src = 'audio/Enote.wav';
	tone2.play();
}

function changeColorTopR() {
	const trCell = document.getElementById('tr');
	trCell.style.boxShadow = '0 0 50px red';
	trCell.style.transform = 'translateY(5px)';
	playToneTopR();
	setTimeout(function() {
		trCell.style.boxShadow = '0 0 0 1px rgb(179, 42, 34), 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 rgb(179, 42, 34), 0 8px 0 1px rgba(0, 0, 0, 0.4), 0 8px 8px 1px rgba(0, 0, 0, 0.5)';
		trCell.style.transform = 'translateY(0px)';
	}, 300);
}
//BOTTOM LEFT highlight and play sound when clicked
bottomL.addEventListener('click', changeColorBottomL);

function playToneBottomL() {
	tone3.src = 'audio/Gnote.wav';
	tone3.play();
}

function changeColorBottomL() {
	const blCell = document.getElementById('bl');
	blCell.style.boxShadow = '0 0 50px chocolate';
	blCell.style.transform = 'translateY(5px)';
	playToneBottomL();
	setTimeout(function() {
		blCell.style.boxShadow = '0 0 0 1px rgb(255, 114, 52), 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 rgb(255, 114, 52), 0 8px 0 1px rgba(0, 0, 0, 0.4), 0 8px 8px 1px rgba(0, 0, 0, 0.5)';
		blCell.style.transform = 'translateY(0px)';
	}, 300);
}
// BOTTOM RIGHT highlight and play sound when clicked
bottomR.addEventListener('click', changeColorBottomR);

function playToneBottomR() {
	tone4.src = 'audio/Bnote.wav';
	tone4.play();
}

function changeColorBottomR() {
	const brCell = document.getElementById('br');
	brCell.style.boxShadow = '0 0 50px blue';
	brCell.style.transform = 'translateY(5px)';
	playToneBottomR();
	setTimeout(function() {
		brCell.style.boxShadow = '0 0 0 1px rgb(36, 74, 181), 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 rgb(36, 74, 181), 0 8px 0 1px rgba(0, 0, 0, 0.4), 0 8px 8px 1px rgba(0, 0, 0, 0.5)';
		brCell.style.transform = 'translateY(0px)';
	}, 300);
}