# Spaceman

Inline-style: 
![alt text](https://i.pinimg.com/736x/93/42/46/934246926f16ded570c3ec799b3f62a3.jpg "Logo Title Text 1")

# _Spaceman_

The Spaceman game is based on the hangman game's logic. The game logic works as follows:- 
* Computer chooses a random word from an array of words.
* The Player gets the number of blank spaces shown on it's screen according to the length of the word.
* Player will guess an alphabet or a letter and press the approprite button labeled as it's guessed letter. 
* Computer checks if the secretWord that was radomly choosen before has that letter or alphabet or not.
* If the letter is in the word, the letter gets displayed on the screen at the appropriate place 
* Else the letter will be stored in the wrongLetters state variable, which will keep track of the wrong tries and shows message of tries left each time somebody guesses a wrong letter.

### _Win-Logic_

The Winner Logic works as follows:- 
* If the player guesses a wrong letter, the wrongLetters count goes up as well as the spaceman image keeps building part by part.
* If the player guesses 6 wrong letters before the word's completion, the game is over and the player gets a loosing message.
* If the player guesses letters correctly before the image's completion or before the 6 wrong guesses, then the player wins and get a winning message.


# Screenshot(s):  

### Starting look of the Spaceman game:- 

![Starting Look of the game](/Spaceman/screenshots/screenshot-00.png)

# Technologies Used: 
We have used three technologies to bulid Spaceman game. The three technologies are as follows:- 

* HTML:- It stands for hypertext markup language. HTML is used to bulid a skelaton of the Spaceman game. It gives the game all the buttons, headers, title and images. 

* CSS:- It stands for Cascading Style Sheets. CSS is used to give the actually look and feel to the game. The styling, coloring, background image and all the delatails related to the look of the game is being done using CSS.

* Javascript:- The javascript is used to give the main functionality to the HTML and CSS built structure. Javascript handles the backend logic behind the working of the game. It handles the clicks and all the state variables that gets manupulated or accessed during the gameplay.

# Getting Started: 

Click on the following link to start the game:- 

# Next Steps: 
The following features will be added soon:- 

* Audio will be added on buttons and guessed words.
* Vector image will be added to show the bacground for better graphics.