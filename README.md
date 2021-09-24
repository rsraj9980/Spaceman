1) Define required constants:
    1.1) Define multiple <div> tags to display the alphabet selection board.
    1.2) Define a array of immage urls, for every part of the spaceship that will show once the game proceeds. 

2) Define required variables used to track the state of the game:
    2.1) Use the array to store the number of alphabets in the word selected. 
        2.2.1) Parse the word randomly selected and put the alphabets word by word in an array. 
    2.2) Use 'usedOptions' variable to track the already used variables.
    2.3) Use a winner variable to represent different possibilities - player won, or game in play.

3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant:
    3.1) Store the alphabets parsed from the selecter word to keep track of the words matched or not matched. 

4) Upon loading the app should:
    4.1) Initialize the state variables:
        4.1.1) Initialize an array of multiple words from which the random word gets selected. 
        4.1.2) Initialize the random word to the array and set player's turn ready.
        4.1.3) Initialize winner to null to represent that there is no winner.

    4.2) Render those state variables to the page:
        4.2.1) Render the board:
            4.2.1.1) Check the taget of the event using the event listner to get which word is selected or pressed from the board.
            4.2.1.2) Loop Over all the array elements and check if the selected work matches the actual work character and then render it on the page.
            4.2.1.2) Use the index of the array to check at which position the character resides.
            4.2.1.3) Show the _ underscore as an alphabet space and keep replacing the _ with alphabet if it matches. 
            4.2.1.4) Set the spaceship new sections if the word doesn't match and change the color of the word red if it doesn't matches or put the word in the appropriate place if matches.

4.3) Wait for the user to select the next word from the grid of A to Z. 

5) Handle a player selection of a word:
    5.1) Obtain the word that is being pressed.  
    5.2) Extracting the element or character of the button pressed using event's target. 
    5.3) If the word selected and the array has the word, immediately render it on the page
    5.4) If the word selected and the actual word does not contains that selected word, then change it's color to red(which means its not vaid).
    5.5) Render the next part image to keep updating the spaceship sections untill the whole spaceship is complete.
6) winner logic
    6.1) Set the amounts of parts or turns needed to complete the spaceship(Approx~ 8)
    6.2) If the not matching array contains more words than the amount of parts of spaceship. that means the player has guessed wrong words way many times and the spaceship is complete. Computer wins. 
    6.3) If the array of actual word and the word that is rendered on the page matches before the spaceship array gets completely used. then Player wins.
    
7) Handle a player clicking the replay button:
	7.1) Do steps 4.1 (initialize the state variables) and 4.2 (render).

