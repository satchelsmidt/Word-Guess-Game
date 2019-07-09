//Define wordBank (where hangman words are drawn from)
var wordBank = ["pig", "cow", "chicken", "sheep", 'horse', "monkey", "bird", "hawk", "snake", "fish", "spider", "cat", "human", "penguin"];

//Define currentWord as a random word from the wordBank array
var currentWord = wordBank[Math.floor(Math.random()*wordBank.length)];

//Define currentLetters as the letters of currentWord broken into an array
var currentLetters = currentWord.split("");

//Define currentLength as the length of the current word being played
var currentLength = currentLetters.length;

var currentHidden = []

//Create for loop that looks at each letter and turns it into the "_" character
for (let i = 0; i < currentLength; i++){
    currentHidden[i] = "_";
}

//Define numWins as number of user wins
var numWins = 0;

//Define guessRemaining at beginning of game (12)
var guessRemaining = 12;

//Define guessedArray as empty array where guessed keystrokes are stored
var guessedArray = [];


// when user key is pressed:
    // - caputure value of key
    // - add key pressed to Array  
    // - check if key pressed is in array of current word
    //     - if it is, replace _ in current word with key pressed
    // - subtract 1 from guesses remaining


    // Next, we give JavaScript a function to execute when onkeyup event fires.
    // document.onkeyup = function(event) {
    //   var userKey = event.key;
    //   console.log(userKey);
    //   guessRemaining = guessRemaining - 1;
    //   console.log(guessRemaining);
    // }

    // console.log(document.onkeyup);
    

// inputfunction = function(event){
//     event.key
// }


//IN PROGRESS
//Load function on page load
document.addEventListener('DOMContentLoaded', function(){
    //Create event that occurs when key is pressed
    document.addEventListener('keydown', event => {
        //Define variables
        var charList = 'abcdefghijklmnopqrstuvwxyz';
        var userKey = event.key.toLowerCase();
        
        //Conditionals
        if (charList.indexOf(userKey) === -1) return;
        if (guessRemaining!= 0){
            guessRemaining = guessRemaining-1;
        };
        if (guessedArray.length < 12){
            guessedArray.push(userKey);
        };
        
        for (let i = 0; i < currentLength; i++){
            if(userKey === currentLetters[i]){
                    currentHidden[i] = userKey;
            };
        };

        //Push variable changes to html text display
        document.getElementById("lettersGuessed").textContent = guessedArray;
        document.getElementById("guessesRemaining").textContent = guessRemaining;
        document.getElementById("currentWord").textContent = currentHidden;

        console.log('userKey:' + userKey);
        console.log('currentLetters:' + currentLetters);
        console.log('currentWord:' + currentWord);
    });
});

// inputFunction = function(e){
//     var guessedLetter = e.key;
//     if (guessedArray.length < 12){
//         guessedArray.push(guessedLetter);
//     }
//     // console.log(guessRemaining);
//     // console.log(guessedLetter);
//     // console.log(guessedArray);
//     document.getElementById("lettersGuessed").textContent = guessedArray;
// };

// document.addEventListener("keyup", inputFunction)



// for (var i = 0; i < currentWord.length; i++){
    
//     console.log(currentWord.charAt(i)) 
// }

// for (var i = 0; i < currentWord.length; i++){
//     if (userKey === currentWord.charAt[i]){
//         ???Change currentWord.charAt[i] to display userKey???
//         numbersLeft = numbersLeft -1
//     }
//     guessRemaining = guessRemaining - 1;
// 

// var numbersLeft = currentWord.length;


// if (numbersLeft == 0 || guessRemaining == 0){
//     // Reset to new word, full guesses
//     numWins = numWins++;
//     guessRemaining = 12;
//     var currentWord = wordBank[i.random()];
// }

//Assign all variable values to html elements
function assignValue(){
    document.getElementById("currentWord").innerHTML = currentHidden;
    document.getElementById("wins").innerHTML = numWins;
    document.getElementById("guessesRemaining").innerHTML = guessRemaining;
    // document.getElementById("lettersGuessed").innerHTML = guessedArray;
}

// Alt Solution?

// var currentWordArray = str.split(currentWord)

// for userKey
// // if userKey IN (currentWordArray){
// //     change _.index to userKey.indexOf(userKey)
//     numbersLeft - 1
// // }