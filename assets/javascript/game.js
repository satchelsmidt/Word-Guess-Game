//Define Variables
//Word bank that function pulls from 
var wordBank = ["pig", "cow", "chicken", "sheep", 'horse', "rat", "duck", "goose", "snake", "fish", "spider", "cat", "dog", "mouse", "farmer", "goat"];
//Current word that user must guess (random word from wordBank array)
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
//Current word divided into letters
var currentLetters = currentWord.split("");
//Number of current letters (to be guessed)
var currentLength = currentLetters.length;
//Empty array to hold letters converted to '_' signs
var currentHidden = []

//For loop that iterates through current number of letters and creates an equivalent array of '_' characters
for (let i = 0; i < currentLength; i++) {
    currentHidden[i] = "_";
}

//Number of wins
var numWins = 0;

//Number of user guesses remaining
var guessRemaining = 12;

//Array of already guessed letters
var guessedArray = [];

//Tracks number of remaining guesses
var numbersLeft = currentWord.length;

//Win or Lose conditions (reset to new game -- variables essentially reset)
function reset() {
    currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    currentLetters = currentWord.split("");
    currentLength = currentLetters.length;
    currentHidden = []
    for (let i = 0; i < currentLength; i++) {
        currentHidden[i] = "_";
    }
    guessRemaining = 12;
    guessedArray = [];
    numbersLeft = currentWord.length;
}

//Load function on page load
document.addEventListener('DOMContentLoaded', function () {
    //Create event that occurs when key is pressed (arrow function)
    document.addEventListener('keydown', event => {
        //Define local variables
        //List of acceptable characters
        var charList = 'abcdefghijklmnopqrstuvwxyz';
        //Key that user pressed (translated to lowercase key)
        var userKey = event.key.toLowerCase();

        //Conditionals
        //If the user presses a key outside of the accepted key pressed, alert them in textbox, do not run remaining conditions
        if (charList.indexOf(userKey) === -1) {
            document.getElementById("textBox").textContent = "Only letters of the alphabet are allowed!"
            return
        };

        //If the user presses a key they have already guessed, alert them in textbox, do not run remaining conditions
        if (guessedArray.includes(userKey)) {
            document.getElementById("textBox").textContent = "You've already guessed this letter!"
            return
        }

        //If the user still has guesses remaining, subtract a guess
        if (guessRemaining != 0) {
            guessRemaining = guessRemaining - 1;
            document.getElementById("textBox").textContent = "Try Again!"
        };

        //If guessed array is less than 12 letters (the max), push newly guessed letters into it
        if (guessedArray.length < 12) {
            guessedArray.push(userKey);
        };

        //For each new letter guessed, convert the corresponding '_' for currentLetters into the letter guessed

        for (let i = 0; i < currentLength; i++) {
            if (userKey === currentLetters[i]) {
                currentHidden[i] = userKey;
                currentLetters[i] = 0;
                numbersLeft = numbersLeft - 1;
                document.getElementById("textBox").textContent = "Nice guess!"
            }
        };

        //TO DO -- when correct letter guessed, do not subtract guesses remaining

        console.log('wordBefore: ' + currentWord);

        //If there are no more letters left, the user wins
        if (numbersLeft === 0) {
            numWins = numWins + 1;

            let chicken = document.getElementById("chicken")
            chicken.play();

            document.getElementById("currentWord").textContent = currentWord;
            setTimeout(function () {
                alert("You are an Animal Expert");
                reset()
                document.getElementById("currentWord").textContent = currentHidden;
                document.getElementById("guessesRemaining").textContent = guessRemaining;
                document.getElementById("lettersGuessed").textContent = guessedArray;
            }, 10);
        }
        //Otherwise, if there are no guesses remaining, they lose
        else if (guessRemaining === 0) {
            let failure = document.getElementById("moo")
            failure.play();
            setTimeout(function () {
                alert("You are a Complete and Utter Failure");
                reset()
                document.getElementById("currentWord").textContent = currentHidden;
                document.getElementById("guessesRemaining").textContent = guessRemaining;
                document.getElementById("lettersGuessed").textContent = guessedArray;
            }, 10)
        };
        console.log('wordAfter: ' + currentWord);

        //Push variable changes to html text display
        document.getElementById("wins").textContent = numWins;
        document.getElementById("currentWord").textContent = currentHidden;
        document.getElementById("guessesRemaining").textContent = guessRemaining;
        document.getElementById("lettersGuessed").textContent = guessedArray;
    });
});

//Assign all variable values to html elements
function assignValue() {
    document.getElementById("currentWord").innerHTML = currentHidden;
    document.getElementById("wins").innerHTML = numWins;
    document.getElementById("guessesRemaining").innerHTML = guessRemaining;
}

//Run our assignValue Function
assignValue();

