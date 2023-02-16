 const cellElements = document.querySelectorAll('.cell');
console.log(cellElements);

const echo = () => console.log("hi");
cellElements.forEach(cellElement => {cellElement.addEventListener("click", echo, {once: true})})