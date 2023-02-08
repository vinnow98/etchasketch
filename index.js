colour = document.getElementById("colourPicker").value;
border = true;
click = false;
random = false;

function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("pixels");
  squares.forEach((pixels) => pixels.remove());
  board.style.display = "grid";
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  amount = size * size;
  for (i = 0; i < amount; i++) {
    let square = document.createElement("pixels");
    square.style.backgroundColor = "white";
    square.style.border = "0.2px solid black";
    square.addEventListener("mouseover", () => {
      if (click) {
        if (colour == "random") {
          randomColour = Math.floor(Math.random() * 16777215).toString(16);
          square.style.backgroundColor = "#" + randomColour;
        } else {
          square.style.backgroundColor = colour;
        }
      }
    });
    board.appendChild(square);
  }
}

function toggleRandomAndColour() {
  colourPicker = document.querySelector("#colourPicker");

  if (!random) {
    randomButton.style.backgroundColor = "grey";
    randomButton.style.transform = "translate(2px, 2px)";
    random = true;
    colourPicker.style.opacity = 0.5;
    colourPicker.disabled = true;
  } else {
    randomButton.style.backgroundColor = "lightgray";
    randomButton.style.transform = "none";
    random = false;
    colourPicker.style.opacity = 1;
    colourPicker.disabled = false;
    colour = colourPicker.value;
  }
}

function changeColour(markerColour) {
  colour = markerColour;
  console.log(markerColour);
}

function toggleBorder() {
  pixels = document.querySelectorAll("pixels");
  toggleButton = document.getElementById("toggleBorder");

  if (border == true) {
    pixels.forEach((pixels) => {
      pixels.style.border = "white";
    });
    toggleButton.textContent = "Add Grid";
    border = false;
  } else {
    pixels.forEach((pixels) => {
      pixels.style.border = "0.2px solid black";
    });
    toggleButton.textContent = "Remove Grid";
    border = true;
  }
}

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName == "PIXELS") {
    if (click) {
      document.querySelector(".colouringMode").textContent =
        "Colouring mode: off";
      click = false;
    } else {
      document.querySelector(".colouringMode").textContent =
        "Colouring mode: on";
      click = true;
    }
  }
});
function resetBoard() {
  pixels = document.querySelectorAll("pixels");
  pixels.forEach((pixels) => {
    pixels.style.backgroundColor = "white";
  });
}
