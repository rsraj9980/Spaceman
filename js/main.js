/*----- constants -----*/
const words = ['SPACE', 'ASTRONAUT', 'SPACESHIP', 'SHUTTLE LAUNCH', 'WELCOME TO THE EARTH', 'JET FUEL', 'NEIL ARMSTRONG', 'ASTEROID', 'MOON', 'METEOROID', 'THE MILKY WAY', 'BIG BANG THEORY', 'COSMOS', 'COMET'];
const MAX_WRONG_GUESSES = 6;


/*----- app's state (variables) -----*/
let secretWord;
let guessWord;
let winOrLoss;
let wrongLetters;


/*----- cached element references -----*/
const letterEls = document.querySelectorAll('#board > button');
const msgEl = document.querySelector('h2');
const replayEl = document.getElementById('replay');
const spacemanEl = document.getElementById('spaceman');
const guessEl = document.getElementById('guess');
const laser = new Audio('audio/laser.wav');
const clapping = new Audio('audio/clapping.wav');
const lose = new Audio('audio/lose.wav');
const wrong = new Audio('audio/wrong.mp3');


/*----- event listeners -----*/
document.querySelector('#board').addEventListener('click', clickHandler);
replayEl.addEventListener('click', init);


/*----- functions -----*/
init();

function init() {
    secretWord = words[Math.floor(Math.random() * words.length)];
    winOrLoss = null;
    wrongLetters = '';
    guessWord = '';
    for (let letter of secretWord) {
        guessWord += letter === ' ' ? ' ' : '_';
    }
    msgEl.textContent = '';
    render();
}


// Handle's clicks
function clickHandler(evt) {
    const letter = evt.target.innerText;
    if (
        evt.target.tagName !== 'BUTTON' ||
        winOrLoss ||
        wrongLetters.includes(letter) ||
        guessWord.includes(letter)
    ) return;
    if (secretWord.includes(letter)) {
        // rebuild guessWord so that it includes the letter possibly in multiple positions. 
        let newGuessWord = '';
        for (let i = 0; i < secretWord.length; i++) {
            if (secretWord.charAt(i) === letter) {
                newGuessWord += letter;
            } else {
                newGuessWord += guessWord.charAt(i);
            }
        }
        laser.play();
        guessWord = newGuessWord;
    } else {
        wrong.play();
        wrongLetters += letter;
    }
    winOrLoss = getWinOrLoss();
    if (winOrLoss === 'L') {
        guessWord = secretWord;
    }
    render();
}


// Handles win and loss logic
function getWinOrLoss() {
    if (secretWord === guessWord) {
        return 'W';
    } else if (wrongLetters.length === MAX_WRONG_GUESSES) {
        return 'L';
    } else {
        return null;
    }
}


// Handles the rendering of guessed letters and button color accordingly
function render() {
    replayEl.style.visibility = winOrLoss ? 'visible' : 'hidden';
    guessEl.textContent = guessWord;
    letterEls.forEach(function(btn) {
        if (guessWord.includes(btn.innerText)) {
            btn.style.backgroundColor = '#80ED99';
        } else if (wrongLetters.includes(btn.innerText)) {
            btn.style.backgroundColor = '#FF5C58';
        } else {
            btn.style.backgroundColor = '#444444';
        }
    });
    spacemanEl.style.backgroundImage = `url('imgs/spaceman-0${wrongLetters.length}.png')`;
    renderMessage();
}


// Handles message rendering accoring to win or loss situation. 
function renderMessage() {
    if (winOrLoss === 'W') {
        clapping.play();
        msgEl.textContent = 'Congratulations!! You are the Winner';
    } else if (winOrLoss === 'L') {
        lose.play();
        msgEl.textContent = 'See you in space! GAME OVER';
    } else {
        msgEl.textContent = `${6 - wrongLetters.length} tries left!`;
    }
}