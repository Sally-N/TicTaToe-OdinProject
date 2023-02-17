 //handle events
 
 const gameDetailsForm = document.getElementById("formone");
//  console.log(gameDetailsForm);


const gamesFormModal = document.querySelector(".GameDetailsModal")
 const submitButton = document.getElementById("submit");
 const gamePage = document.getElementById("root");

gameDetailsForm.addEventListener("submit", (e) => {
    e.preventDefault();

})


//Display GameBoard

function hideFormDisplayGameBoard(){
    gamesFormModal.classList.add("GameDetailsModalHidden");
    gamesFormModal.classList.remove("GameDetailsModal")
    gamePage.style.backgroundColor = "#541ebf"
   

}

submitButton.addEventListener("click", hideFormDisplayGameBoard)
 ////get form Data


 const formDetails = function getFormDetails (){
    const xname = document.getElementById("xname").value;
    const oname = document.getElementById("oname").value;
    let gameType;

    if(document.getElementById("checkboxone").checked){
        gameType = "humanVshuman"
    }else if(document.getElementById("checkboxtwo").checked){
        gameType = "humanVsEasyAI"
    }else{
        gameType = "humanVSHardAI"
    }

    ///make inputs are filled
//    if (xname.length <= 0){
//     document.getElementById("xname").innerHTML = "Enter Player X's Name";
//    }
const details = {xname, oname, gameType}
 }

 //add event listener for submitting for details
 submitButton.addEventListener("click", formDetails);

 ////set game rules
 const gameRules = () => {
   getFormDetails

 }


 ////set winning placements
 const winningPlacements = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [0,4,8]
]
