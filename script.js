let wins, losses, ties = 0;
function getComputerChoice() {
    let choice, number;

    number = Math.floor(Math.random() * 2) + 1;
    switch (number) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection != computerSelection) {
        switch (computerSelection) {
            case "rock":
                if (playerSelection == "paper") {
                    wins++;
                    console.log("You won, Paper beats Rock!");
                } else {
                    losses++;
                    console.log("You lost, Scissors beats Paper!");
                }
            case "paper":
                if (playerSelection == "scissors") {
                    wins++;
                    console.log("You won, Scissors beats Paper!");
                } else {
                    losses++;
                    console.log("You lost, Paper beats Rock!");
                }
            case "scissors":
                if (playerSelection == "rock") {
                    wins++;
                    console.log("You won, Rock beats Scissors!");
                } else {
                    losses++;
                    console.log("You lost, Scissors beats Paper!");
                }
        }
    } else {
        ties++;
        console.log("You tied");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(prompt("Choose, Rock, Paper or Scissors!").toLowerCase(), getComputerChoice());
    }
    if (wins > losses) {
        console.log(`Congrats, you won! With ${wins} wins!`);
    } else {
        console.warn(`Oh oh... you lost. With ${losses} losses!`);
    }
}