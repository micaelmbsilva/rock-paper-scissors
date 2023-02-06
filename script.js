let wins = 0, losses = 0, ties = 0;
function getComputerChoice() {
    let choice, number;

    number = Math.floor(Math.random() * 3) + 1;
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
    if (playerSelection !== computerSelection) {
        switch (computerSelection) {
            case "rock":
                if (playerSelection === "paper") {
                    wins++;
                    console.log("You won, Paper beats Rock!");
                    break;
                } else {
                    losses++;
                    console.log("You lost, Scissors beats Paper!");
                    break;
                }
            case "paper":
                if (playerSelection === "scissors") {
                    wins++;
                    console.log("You won, Scissors beats Paper!");
                    break;
                } else {
                    losses++;
                    console.log("You lost, Paper beats Rock!");
                    break;
                }
            case "scissors":
                if (playerSelection === "rock") {
                    wins++;
                    console.log("You won, Rock beats Scissors!");
                    break;
                } else {
                    losses++;
                    console.log("You lost, Scissors beats Paper!");
                    break;
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
