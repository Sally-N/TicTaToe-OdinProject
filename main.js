 const gameDetailsForm = document.getElementById("formone");
//  console.log(gameDetailsForm);


const gamesFormModal = document.querySelector(".GameDetailsModal")
 const submitButton = document.getElementById("submit");
 const gamePage = document.getElementById("root");
//  console.log(submitButton);


// function preventfalseSubmit(event){
//     event.preventDefault()
// }

// gameDetailsForm.addEventListener("submit", preventfalseSubmit);

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
 
 
//  const cellElements = document.querySelectorAll('.cell');
// console.log(cellElements);

// const echo = () => console.log("hi");
// cellElements.forEach(cellElement => {cellElement.addEventListener("click", echo, {once: true})})