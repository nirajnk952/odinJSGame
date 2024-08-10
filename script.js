console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Please enter rock, paper, or scissors:");
    
    // If the user cancels the prompt, choice will be null.
    if (choice === null) {
        return null; // Early return to indicate the game should be stopped
    }

    choice = choice.toLowerCase();

    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Invalid choice! Please enter rock, paper, or scissors:");
        
        // If the user cancels the prompt, choice will be null.
        if (choice === null) {
            return null; // Early return to indicate the game should be stopped
        }

        choice = choice.toLowerCase();
    }

    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === null) {
        console.log("Game was canceled.");
        return; // Stop the round if user canceled the game
    }

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        
        // Stop the game if the user canceled the prompt
        if (humanSelection === null) {
            console.log("Game terminated by the user.");
            return; // Exit the loop and end the game
        }

        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, the computer won the game.");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();
