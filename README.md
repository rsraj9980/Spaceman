# Spaceman

![Welcome to Space](https://i1.wp.com/boingboing.net/wp-content/uploads/2015/05/lifeline.jpg?fit=945%2C532&ssl=1&w=640)

### _Spaceman_

The Spaceman game is based on the hangman game's logic. The game logic works as follows:- 
* Computer chooses a random word from an array of words.
* The Player gets the number of blank spaces shown on it's screen according to the length of the word.
* Player will guess an alphabet or a letter and press the approprite button labeled as it's guessed letter (which makes a laser sound if the letter is correct). 
* Computer checks if the secretWord that was radomly choosen before has that letter or alphabet or not.
* If the letter is in the word, the letter gets displayed on the screen at the appropriate place 
* Else the letter will be stored in the wrongLetters state variable, which will keep track of the wrong tries and shows message of tries left each time somebody guesses a wrong letter (which makes a deadning wrong sound if the letter is incorrect).

### _Win-Logic_

The Winner Logic works as follows:- 
* If the player guesses a wrong letter, the wrongLetters count goes up as well as the spaceman image keeps building part by part.
* If the player guesses 6 wrong letters before the word's completion, the game is over and the player gets a loosing message and a game over sound.
* If the player guesses letters correctly before the image's completion or before the 6 wrong guesses, then the player wins and get a winning message and a clapping sound.


# Screenshot(s):  

### Starting look of the Spaceman game:- 

![Starting Look of the game](screenshots/screenshot-00.png)

### If player guesses the right word
![If player guesses the right word](screenshots/screenshot-01.png)

### If player guesses the wrong word
![If player guesses the wrong word](screenshots/screenshot-02.png)

### If player wins 
![If player wins](screenshots/screenshot-03.png)

### If player looses
![If player looses](screenshots/screenshot-04.png)

### Replay button
![Replay button](screenshots/screenshot-05.png)


# Technologies Used: 
We have used three technologies to bulid Spaceman game. The three technologies are as follows:- 

* HTML:- It stands for hypertext markup language. HTML is used to bulid a skelaton of the Spaceman game. It gives the game all the buttons, headers, title and images. 

* CSS:- It stands for Cascading Style Sheets. CSS is used to give the actually look and feel to the game. The styling, coloring, background image and all the delatails related to the look of the game is being done using CSS.

* Javascript:- The javascript is used to give the main functionality to the HTML and CSS built structure. Javascript handles the backend logic behind the working of the game. It handles the clicks and all the state variables that gets manupulated or accessed during the gameplay.

# Getting Started: 
Click on the following link to start the game:- 

[Rajkamal's Spaceman game](https://rsraj9980.github.io/Spaceman/)

# Next Steps(Icebox): 
The following features are be added as Icebox:- 

* Audio is added on buttons or guessed words.
* Vector image is added to show the bacground for better graphics.
* Gives away the word if player looses.
* Addition of a small favicon. 