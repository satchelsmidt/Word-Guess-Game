//Define Variables
var wordBank = ["pig", "cow", "chicken", "sheep", 'horse', "monkey", "bird", "hawk", "snake", "fish", "spider", "cat", "human", "penguin"];
var currentWord = wordBank[Math.floor(Math.random()*wordBank.length)];
var currentLetters = currentWord.split("");
var currentLength = currentLetters.length;
var currentHidden = []

for (let i = 0; i < currentLength; i++){
    currentHidden[i] = "_";
}

var numWins = 0;
var guessRemaining = 12;
var guessedArray = [];
var numbersLeft = currentWord.length;

//Win or Lose conditions (reset to new game)
function reset(){
    currentWord = wordBank[Math.floor(Math.random()*wordBank.length)];
    currentLetters = currentWord.split("");
    currentLength = currentLetters.length;
    currentHidden = []
    for (let i = 0; i < currentLength; i++){
        currentHidden[i] = "_";
    }
    guessRemaining = 12;
    guessedArray = [];
    numbersLeft = currentWord.length;
}

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
                    currentLetters[i] = 0;
                    numbersLeft = numbersLeft - 1;
            };
        };
        console.log('wordBefore: ' + currentWord);

        if(numbersLeft === 0){
            numWins = numWins+1;
            document.getElementById("currentWord").textContent = currentWord;
            setTimeout(function() {
                alert("You are an Animal Expert");
                reset()
                document.getElementById("currentWord").textContent = currentHidden;
                document.getElementById("guessesRemaining").textContent = guessRemaining;
                document.getElementById("lettersGuessed").textContent = guessedArray;
            },10)
            ;
        };

        if(guessRemaining === 0){
            setTimeout(function() {
                alert("You are a Complete and Utter Failure");
                reset()
                document.getElementById("currentWord").textContent = currentHidden;
                document.getElementById("guessesRemaining").textContent = guessRemaining;
                document.getElementById("lettersGuessed").textContent = guessedArray;
            },10)
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
function assignValue(){
    document.getElementById("currentWord").innerHTML = currentHidden;
    document.getElementById("wins").innerHTML = numWins;
    document.getElementById("guessesRemaining").innerHTML = guessRemaining;
    
}