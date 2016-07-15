/**
 * Created by Viktoria on 14.07.2016.
 */
var colorIGuess;
var userInput;
var finished = false;
var guess = 0;
//14
var noSortedColors = ["moccasin", "silver", "maroon", "purple", "aqua", "orchid", "lime", "indigo",
    "gold", "cyan", "green", "black", "chocolate", "darkred"];
var colors = noSortedColors.sort();
//  alert("Sorted colors array is " + colors.join( ", ")); just for debugging
//var colors = ["aqua", "black", "chocolate", "cyan", "darkred", "gold", "green", "indigo",
//    "lime", "maroon", "moccasin", "orchid", "purple", "silver"];

//the index of color i guessed
var randomNumber = (Math.floor(Math.random() * 14));
//the color I guessed
colorIGuess = colors[randomNumber];
// alert("The color I guess is " + colorIGuess);
while (!finished) {
    userInput = prompt("I am thinking one of these colors: " + colors.join(", ") + ".\n\n"
        + "What color I am thinking of? \n\n");
    userInput = userInput.trim();
    guess += 1;
    finished = checkGuess();

}

function checkGuess() {
    // index user color in array
    var indexUserGuess = colors.indexOf(userInput);
    if (indexUserGuess != -1) {
        if (indexUserGuess > randomNumber) {
            alert("Sorry, your guess is not correct!\n\n" +
                "Hint: your color is alphabetically higher than mine.\n\n Please try again.");
            return false;
        }
        if (indexUserGuess < randomNumber) {
            alert("Sorry, your guess is not correct!\n\n" +
                "Hint: your color is alphabetically lower than mine.\n\n Please try again.");
            return false;
        }
        if (colorIGuess == userInput) {
            var myBody = document.getElementsByTagName("body")[0];
            myBody.style.background = userInput;
            alert("Congratulations! You have guessed the color!\n\n" +
                "It took you " + guess + " guesses to finish the game!\n\n" +
                "You can see the color on the background.");
            return true;
        }
    }
    else {
        alert("Sorry, I don't recognize your color.\n\n Please try again.");
        return false;
    }

}
