const gridContainer = document.querySelector(".grid-container");
const grid = document.querySelector(".grid");
const rows = 16;
const columns = rows;
const numberOfGridCells = rows * columns;

function createGrid() {
  grid.setAttribute("style", `grid-template-columns: repeat(${columns}, 1fr)`);
  for (let i = 1; i <= numberOfGridCells; i++) {
    const gridCell = document.createElement("div");
    gridCell.style.border = "1px solid black";
    gridCell.classList.add("grid-cell");
    grid.appendChild(gridCell);
  }
}

createGrid();
