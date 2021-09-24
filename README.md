1) Define required constants:
1.1) Define a object with keys 'null' when the squares of choices are empty.
1.2) Define all the different keywords that can be selected randomly to be guessed by the player.

2) Define required variables used to track the state of the game:
2.1) Use the array to represent the number of squares. 
2.2) Use 'usedOptions' variable to track the already used variables.
2.3) Use a winner variable to represent different possibilities - player won, or game in play.

3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant:
3.1) Store the used or not option word that will be represented in the upper left  squares on the page.

4) Upon loading the app should:
4.1) Initialize the state variables:
    4.1.1) Initialize an array of multiple nulls according to the random word selected. 
    4.1.2) Initialize the random word to the array and set player's turn ready.
    4.1.3) 4.1.3) Initialize winner to null to represent that there is no winner.
4.2) Render those state variables to the page:
4.2.1) Render the board:
4.2.1.1) loop Over all the array elements and check if the selected work matches the actual work character and then render it on the page.
4.2.1.2) Use the index of the array to check at which position the character resides.
4.2.1.3) Set the spaceship new sections if the word doesn't match and put that work in the not matching section or put the word in the appropriate place if matches.

4.3) Wait for the user to put next word in the box and click a 'enter choice' button. 

5) Handle a player selection of a word:
    5.1) Obtain the word that is being entered in the text enter box. 
    5.2) Extracting the element of the text box using its Id. 
    5.3) If the word selected and the array has the word, immediately render it on the page
    5.4) If the word selected and the actual word does not contains that selected word, then render it on the page but in to not matching section for future refrences.
    5.5) render the next part image to keep updating the spaceship sections untill the whole spaceship is complete.
6) winner logic
    6.1) Set the amounts of parts needed to complete the spaceship
    6.2) If the not matching array contains more words than the amount of parts of spaceship. that means the player has guessed wrong words way many times and the spaceship is complete.
    6.3) If the array of actual word and the word that is rendered on the page matches before the spaceship array gets completely used. then Player wins.
    
7) Handle a player clicking the replay button:
	7.1) Do steps 4.1 (initialize the state variables) and 4.2 (render).

