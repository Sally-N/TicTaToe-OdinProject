//first step, we need to attach event (submit) listener to the form to get user data

// attach event (click) listers to each "game box"

//next, initialize the game

//next, we need to check which gamemode we're playing

// we need to set win conditions

// we need to determine current player

// after each move, check win conditions and if not met, set other player as active

// human vs human, next implement easy ai, next impossible ai

//handle events

const gameDetailsForm = document.getElementById("formone");
//  console.log(gameDetailsForm);
const gameCells = document.getElementsByClassName("cell");
console.log(gameCells);


const gamesFormModal = document.querySelector(".GameDetailsModal")
const submitButton = document.getElementById("submit");
const gamePage = document.getElementById("root");
const gameDisplay = document.querySelector(".game-display")
console.log(gameDisplay);
const restartButton = document.querySelector(".restart");


gameDetailsForm.addEventListener("submit", (e) => {
    e.preventDefault();

})

///global variables
let player;
let gameStatus = false;
let currentPlayer;


///get form data
function getFormDetails() {
    const xname = document.getElementById("xname").value;
    const oname = document.getElementById("oname").value;
    let gameType = '';

    if (document.getElementById("checkboxone").checked) {
        gameType = "humanVshuman"
    } else if (document.getElementById("checkboxtwo").checked) {
        gameType = "humanVsEasyAI"
    } else {
        gameType = "humanVSHardAI"
    }


    let details = { xname, oname, gameType }
    console.log(details);

    gamesFormModal.classList.add("GameDetailsModalHidden");
    gamesFormModal.classList.remove("GameDetailsModal")
    gamePage.style.backgroundColor = "#541ebf"
    gameDisplay.style.display = "contents"


}

submitButton.addEventListener("click", getFormDetails);

//add event listeners for the each game cell
const initiateGameFactory = (e) => {
    gameStatus = true;
    console.log("yes", gameStatus);


}

const restartGameFactory = (e) => {
    gameStatus = false;
    ///remove all x'x and o's classes and 
}

const gameBoardCells = () => {
    const allCells = Array.from(gameCells)
    allCells.forEach(cell => {
        cell.addEventListener('click', addToClasX, { once: true });
        function addToClasX() {
            cell.textContent("X")
            gameStatus = true;
        };

        // restartButton.addEventListener('click', restartGame);
    });
}




// const gameMovesFactory = () => {
//     gameBoardCells;
//     // initiateGameFactory;
//     getFormDetails;

//     const changePlayers = () => {
//         player = (player == xname) ? oname : xname;
//         currentPlayer = (currentPlayer == xname) ? oname : xname;

//     }

// }



////set winning placements
const winningPlacements = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [0, 4, 8]
]
