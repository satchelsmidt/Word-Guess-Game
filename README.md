# Word-Guess-Game

### About
  
Hangman-style word guessing game that has a farm animal theme. User is able to use keyboard to guess letters of the current word, and if all letters are guessed correctly the user score is increased. Is the user runs out of guesses, the game will restart and a new word will be displayed. 

App was built to bring together HTML, CSS, and JavaScript skills in a basic web application. Javascript logic links to the front end to dynamically change the page based on user input. 

### Walkthrough

Upon app load, a random farm animal name is generated and the number of spaces in the name is shown to the user, with all letters hidden. The user is prompted to press any key on their keyboard to begin guessing letters.

<img src="/assets/images/readme_1.PNG" width="300" height="300"/>

The textbox in-game provides feedback on user answers in real-time.

If the user guesses all of the correct letters, the animal name is revealed and a prompt appears on screen declaring the user a winner. After exiting the prompt, the game is reset and the user win count is increased by one. 

If the user runs out of guesses, a prompt appears on screen shaming them, and the game resets upon exiting the prompt. 

### Technology Used

* JavaScript
* HTML
* CSS

### Future Development

* Do not count down number of guesses when the letter guessed is correct
* Styling updates
