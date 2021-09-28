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
const astroPic = document.getElementById('spaceman');


/*----- event listeners -----*/
document.querySelector('#board').addEventListener('click', clickHandler);


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
    //render();
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

        }
        guessWord = newGuessWord;
    } else {
        wrongLetters += letter;
    }
}

function render() {
    wordIndex = randomWordIndex();
    renderWord(wordIndex);
}

function renderWord(wordInd) {

    let wordMsg = board[wordInd].toString();
    for (let i = 0; i < wordMsg.length; i++) {
        wordMsg = wordMsg.replace(',', ' ');
    }
    console.log(wordMsg);
    msgEl.innerHTML = wordMsg;
}

function boardChange(buttonText, wordIndex) {
    const chosenWord = word[wordIndex];
    const chosenWordArray = chosenWord.split('');
    if (chosenWord.includes(buttonText)) {
        let findIndex = chosenWordArray.findIndex(f => f === buttonText);
        board[wordIndex][findIndex] = buttonText;
        renderWord(wordIndex);
    } else {
        ++turns;
    }

    console.log(chosenWord);
    console.log(board);
    console.log(turns);
}