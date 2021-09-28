/*----- constants -----*/
const word = ['HELP', 'HELLO', 'PARTS', 'RIPLEY'];


/*----- app's state (variables) -----*/
let board;
let winner;
let wordIndex;
let turns = 0;

/*----- cached element references -----*/
const letterEls = document.querySelectorAll('#board > button');
const msgEl = document.querySelector('h2');
const replayEl = document.getElementById('#replay');
const astroPic = document.getElementById('#spaceman');


/*----- event listeners -----*/
document.querySelector('#board').addEventListener('click', clickHandler);
/*----- functions -----*/
init();

function init() {
    board = [
        ['_', '_', '_', '_'], // help
        ['_', '_', '_', '_', '_'], // hello
        ['_', '_', '_', '_', '_'], // parts
        ['_', '_', '_', '_', '_', '_'] // Ripley
    ];
    winner = null;
    render();
}

// Handle's clicks
function clickHandler(evt) {
    const buttonText = evt.target.innerText;

    boardChange(buttonText, wordIndex);
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

function randomWordIndex() {
    const chosenWord = word[Math.floor(Math.random() * word.length)];
    const chosenWordIndex = word.findIndex(w => w === chosenWord);

    // console.log(chosenWord);
    // console.log(chosenWordIndex);
    return chosenWordIndex;
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