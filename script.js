const gridContainer = document.querySelector(".grid-container");
const grid = document.querySelector(".grid");
const reloadButton = document.querySelector(".reload");
const rows = 16;
const columns = rows;
const numberOfGridCells = rows * columns;

reloadButton.addEventListener("click", reloadGrid);

function reloadGrid() {
  clearGrid();
  createGrid();
}

function clearGrid() {
  grid.innerHTML = "";
}

function createGrid() {
  grid.setAttribute("style", `grid-template-columns: repeat(${columns}, 1fr)`);
  for (let i = 1; i <= numberOfGridCells; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    grid.appendChild(gridCell);
  }
  configureGridCells();
}

function addColor(gridCell) {
  gridCell.setAttribute("style", "background-color: black");
}

function configureGridCells() {
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((gridCell) => {
    gridCell.addEventListener("mouseover", () => {
      addColor(gridCell);
    });
  });
}

window.onload = createGrid();
