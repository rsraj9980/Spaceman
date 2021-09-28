/*----- constants -----*/
const words = ['HELP', 'HELLO', 'PARTS', 'RIPLEY', 'HELLO I AM HERE'];
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
    render();
}


// Handle's clicks
function clickHandler(evt) {
    console.log(secretWord);
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
        guessWord = newGuessWord;
    } else {
        wrongLetters += letter;
    }
    winOrLoss = getWinOrLoss();
    render();
}

function getWinOrLoss() {
    if (secretWord === guessWord) {
        return 'W';
    } else if (wrongLetters.length === MAX_WRONG_GUESSES) {
        return 'L';
    } else {
        return null;
    }
}

function render() {
    replayEl.style.visibility = winOrLoss ? 'visible' : 'hidden';
    guessEl.textContent = guessWord;
    letterEls.forEach(function(btn) {
        if (guessWord.includes(btn.innerText)) {
            btn.style.backgroundColor = 'green';
        } else if (wrongLetters.includes(btn.innerText)) {
            btn.style.backgroundColor = 'red';
        } else {
            btn.style.backgroundColor = 'white';
        }
    });
    spacemanEl.style.backgroundImage = `url('imgs/spaceman-0${wrongLetters.length}.jpg')`;
}