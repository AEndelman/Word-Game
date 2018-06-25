// global variables
var wins = 0;
var losses = 0;
var lettersCorrect = -1;


function startGame() {
    confirm("Good luck!");

    // <!-- Code to randomly choose a word (from array)-->

    var guessesLeft = 7;
    var roundTwo = false;
    var lettersChosen = [];

    var wordChoices = [
        "gooblygook",
        "atlanta",
        "cerveza",
        "car",
        "mandala",
        "maroon",
        "telenovela",
        "computer",
        "antifreeze",
        "napkin"
    ]

    var wordChoice = wordChoices[Math.floor(Math.random() * wordChoices.length)];

    console.log(wordChoice);

    // <!-- Figure length of word and create spaces for user to guess -->

    var answer = [];

    for (var x = 0; x < wordChoice.length; x++) {
        answer[x] = "-";
    }

    var spacesLeft = wordChoice.length;

    console.log(spacesLeft);
    console.log(answer);

    // <!-- Assign all the letters in word to an array -->

    var answerLetter = [];

    for (var y = 0; y < wordChoice.length; y++) {
        answerLetter[y] = wordChoice.charAt(y);
    }
    console.log(answerLetter);

    // win or lose

    function win() {
        if (spacesLeft == 0) {
            alert("You Win!");
            wins = (wins + 1);
        }
        else { }
    }

    function lose() {
        if (guessesLeft == 0) {
            alert("You Lose!");
            losses = (losses + 1);
        }

        else { }
    }

    // User inputs letter and returns depending on answer (add function)


    document.onkeyup = function (event) {
        var letternotUsed = true;
        var userInput = event.key.toLowerCase();
        var lettersCorrect = -1;


        if (userInput === "a" || userInput === "b" || userInput === "c" || userInput === "d" || userInput === "e" || userInput === "f" || userInput === "g" || userInput === "h" || userInput === "i" || userInput === "j" || userInput === "k" || userInput === "l" || userInput === "m" || userInput === "n" || userInput === "o" || userInput === "p" || userInput === "q" || userInput === "r" || userInput === "s" || userInput === "t" || userInput === "u" || userInput === "v" || userInput === "x" || userInput === "y" || userInput === "z") {

            //call function for if letter used already
            letterUsed();

            //Push letter to array for what user has guessed

            lettersChosen.push(userInput);
            console.log(lettersChosen);

            //starting round 2 checks for previously answered questions.


            roundTwo = true;

            // Answer correct

            for (var z = 0; z < wordChoice.length; z++) {
                if (userInput == answerLetter[z] && spacesLeft > 0 && letternotUsed == true) {
                    spacesLeft = (spacesLeft - 1);
                    answer[z] = answerLetter[z];
                    console.log(answer);
                    console.log(spacesLeft);
                    console.log(guessesLeft);
                    lettersCorrect++;
                    win();
                }

            }

            // Counter for incorrect guess...

            if (lettersCorrect >= 0 && letternotUsed == true) {
                guessesLeft = guessesLeft;
                console.log(guessesLeft);
                lettersCorrect = -1;
            }

            else if (lettersCorrect < 0 && letternotUsed == true) {
                guessesLeft = guessesLeft - 1;
                console.log(guessesLeft);
                lettersCorrect = -1;
                lose();
            }

        }

        //if letter redundant it doesn't run function

        function letterUsed() {
            for (w = 0; w < lettersChosen.length; w++) {
                if (userInput == lettersChosen[w] && roundTwo == true) {
                    alert("You've already guessed " + lettersChosen[w]);
                    letternotUsed = false;
                    break
                }

                else { }
            }
        }

        document.getElementById("answer").innerHTML = answer.join(" ");
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        document.getElementById("lettersChosen").innerHTML = lettersChosen.join(" ");
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        

    }

    document.getElementById("answer").innerHTML = answer.join(" ");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("lettersChosen").innerHTML = lettersChosen.join(" ");
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
}