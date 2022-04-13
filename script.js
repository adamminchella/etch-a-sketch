const gridContainer = document.querySelector(".grid-container");
const grid = document.querySelector(".grid");
const reloadButton = document.querySelector(".reload");
const rainbowButton = document.querySelector(".rainbow");
const fillButton = document.querySelector(".fill");
const size = document.querySelector(".slider");
const sizeInfo = document.querySelector(".slider-text");
let mode = "shadow";
let rows = 16;

size.addEventListener("input", changeGridSize);
reloadButton.addEventListener("click", reloadGrid);
rainbowButton.addEventListener("click", () => {
  mode = "rainbow";
});
fillButton.addEventListener("click", () => {
  mode = "fill";
});

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
    gridCell.addEventListener("mouseover", (e) => {
      addColor(gridCell, mode, e);
    });
  });
}

function addColor(gridCell, mode, e) {
  if (mode === "fill") {
    gridCell.setAttribute("style", "background-color: black");
  } else if (mode === "rainbow") {
    randomR = Math.floor(Math.random() * 256);
    randomG = Math.floor(Math.random() * 256);
    randomB = Math.floor(Math.random() * 256);
    gridCell.setAttribute(
      "style",
      `background-color: rgb(${randomR}, ${randomG}, ${randomB}`
    );
  } else if (mode === "shadow") {
    if (e.target.style.backgroundColor === `rgb(0, 0, 0)`) {
      return;
    }
    if (e.target.style.backgroundColor.match(/rgba/)) {
      let currentShade = Number(e.target.style.backgroundColor.slice(-4, -1));

      if (currentShade <= 0.9) {
        currentShade = (currentShade * 10 + 1) / 10;
        e.target.style.backgroundColor = `rgba(0, 0, 0, ${currentShade}`;
      }
    } else {
      e.target.style.backgroundColor = `rgba(0, 0, 0, 0.1)`;
    }
  }
}

window.onload = createGrid();
