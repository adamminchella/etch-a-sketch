const gridContainer = document.querySelector(".grid-container");
const rows = 16;
const columns = rows;
let numberOfGridCells = rows * columns;

function createGrid() {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  grid.setAttribute(
    "style",
    `display: grid; grid-template-columns: repeat(${columns}, 1fr)`
  );
  gridContainer.appendChild(grid);

  for (let i = 1; i <= numberOfGridCells; i++) {
    const gridCell = document.createElement("div");
    gridCell.style.border = "1px solid black";
    gridCell.classList.add("grid-cell");
    grid.appendChild(gridCell);
  }
}

createGrid();
