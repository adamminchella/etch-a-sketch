const gridContainer = document.querySelector(".grid-container");
const grid = document.querySelector(".grid");
const reloadButton = document.querySelector(".reload");
const size = document.querySelector(".slider");
const sizeInfo = document.querySelector(".slider-text");
let rows = 16;

size.addEventListener("input", changeGridSize);
reloadButton.addEventListener("click", reloadGrid);

function changeGridSize() {
  rows = size.value;
  sizeInfo.innerHTML = `Size: ${rows} X ${rows}`;
}

function reloadGrid() {
  clearGrid();
  createGrid();
}

function clearGrid() {
  grid.innerHTML = "";
}

function createGrid() {
  grid.setAttribute("style", `grid-template-columns: repeat(${rows}, 1fr)`);
  for (let i = 1; i <= rows * rows; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    grid.appendChild(gridCell);
  }
  configureGridCells();
}

function configureGridCells() {
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((gridCell) => {
    gridCell.addEventListener("mouseover", () => {
      addColor(gridCell);
    });
  });
}

function addColor(gridCell) {
  gridCell.setAttribute("style", "background-color: black");
}

window.onload = createGrid();
