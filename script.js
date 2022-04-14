const gridContainer = document.querySelector(".grid-container");
const grid = document.querySelector(".grid");
const reloadButton = document.querySelector(".reload");
const colorPicker = document.querySelector(".color-picker");
const fillButton = document.querySelector(".fill");
const rainbowButton = document.querySelector(".rainbow");
const shadowButton = document.querySelector(".shadow");
const size = document.querySelector(".slider");
const sizeInfo = document.querySelector(".slider-text");
let mode = "fill";
let rows = 16;

size.addEventListener("input", changeGridSize);
reloadButton.addEventListener("click", reloadGrid);
rainbowButton.addEventListener("click", () => {
  mode = "rainbow";
});
fillButton.addEventListener("click", () => {
  mode = "fill";
});
shadowButton.addEventListener("click", () => {
  mode = "shadow";
});

colorPicker.addEventListener("click", chooseColor);

// HTML color picker returns a HEX value which must be converted to RGB format in order to apply shadow function
function chooseColor() {
  userColorHex = colorPicker.value;
  let userColorRGB = userColorHex.match(/[^#]{2}/g);
  let R = parseInt(userColorRGB[0], 16);
  let G = parseInt(userColorRGB[1], 16);
  let B = parseInt(userColorRGB[2], 16);
  return `${R}, ${B}, ${G}`;
}

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
    gridCell.addEventListener("mouseover", addColor);
  });
}

function addColor(e) {
  if (mode === "fill") {
    e.target.style.backgroundColor = `rgb(${chooseColor()})`;
  } else if (mode === "rainbow") {
    randomR = Math.floor(Math.random() * 256);
    randomG = Math.floor(Math.random() * 256);
    randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB}`;
  } else if (mode === "shadow") {
    if (e.target.style.backgroundColor === `rgb(${chooseColor()})`) {
      return;
    }
    if (e.target.style.backgroundColor.includes("rgba")) {
      let currentShade = Number(e.target.style.backgroundColor.slice(-4, -1));
      if (currentShade <= 0.9) {
        currentShade = (currentShade * 10 + 1) / 10;
        e.target.style.backgroundColor = `rgba(${chooseColor()}, ${currentShade}`;
      }
    } else {
      e.target.style.backgroundColor = `rgba(${chooseColor()}, 0.1)`;
    }
  }
}

window.onload = createGrid();
