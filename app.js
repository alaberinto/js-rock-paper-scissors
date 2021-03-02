function computerPlay() {
    let computerOptions = ["Rock", "Paper", "Scissors"];

    let random = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[random];
}

function changeCase(playerSelection) {
    return playerSelection.replace(
        /\w\S*/g,
        function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
      );
}

function playSingleRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("Draw!");
    }
    else {
        if (playerSelection == "Rock") {
            if (computerSelection == "Scissors") {
                console.log("Rock beats scissors! Player wins!");
            }
            else if (computerSelection == "Paper") {
                console.log("Paper beats rock! Computer wins!");
            }
        }
        else if (playerSelection == "Paper") {
            if (computerSelection == "Rock") {
                console.log("Paper beats rock! Player wins!");
            }
            else if (computerSelection == "Scissors") {
                console.log("Scissors beats paper! Computer wins!");
            }
        }
        else if (playerSelection == "Scissors") {
            if (computerSelection == "Paper") {
                console.log("Scissors beats paper! Player wins!");
            }
            else if (computerSelection == "Rock") {
                console.log("Rock beats scissors! Computer wins!");
            }
        }
    }
}

let playerPlay = prompt("Choose: Rock, Paper, or Scissors.");
playerPlay = changeCase(playerPlay);
console.log(playerPlay);