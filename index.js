colour = document.getElementById("colourPicker").value;
 colourPicker = document.querySelector("#colourPicker");

 mouseDown = false;
 border = true;
 random = false;
 erasor = false;
 document.body.onmousedown = () => {
   mouseDown = true;
 };
 document.body.onmouseup = () => {
   mouseDown = false;
 };
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
     square.addEventListener("mouseover", squareEvent);
     square.addEventListener("mousedown", squareEvent);
     board.appendChild(square);
   }
 }

 function squareEvent(e) {
   if (e.type === "mouseover" && !mouseDown) return;
   if (colour == "random") {
     randomColour = Math.floor(Math.random() * 16777215).toString(16);
     this.style.backgroundColor = "#" + randomColour;
   } else {
     this.style.backgroundColor = colour;
   }
 }

 //start randomButtom
 function toggleRandom() {
   if (!random) {
     randomOn();
     colourPickerOff();
     erasorOff();
   } else {
     randomOff();
     colourPickerOn();
     //colour changes to current colourpicker colour
     colour = colourPicker.value;
   }
 }
 function randomOn() {
   randomButton.style.backgroundColor = "grey";
   randomButton.style.transform = "translate(2px, 2px)";
   random = true;
 }

 function randomOff() {
   randomButton.style.backgroundColor = "lightgray";
   randomButton.style.transform = "none";
   random = false;
 }
 // end of randomButton

 //start erasorButton()
 function toggleErasor() {
   if (!erasor) {
     erasorOn();
     randomOff();
     colourPickerOff();
   } else {
     erasorOff();
     colourPickerOn();
     colour = colourPicker.value;
   }
 }

 function erasorOn() {
   erasorButton.style.backgroundColor = "grey";
   erasorButton.style.transform = "translate(2px, 2px)";
   erasor = true;
 }

 function erasorOff() {
   erasorButton.style.backgroundColor = "lightgray";
   erasorButton.style.transform = "none";
   erasor = false;
 }
 //end erasorButton

 //start colorPicker

 function colourPickerOn() {
   colourPicker.style.opacity = 1;
   colourPicker.disabled = false;
 }

 function colourPickerOff() {
   colourPicker.style.opacity = 0.5;
   colourPicker.disabled = true;
 }
 //end colourpicker
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

 //Changed toggle to mousedown and mousehover(press and drag)
//  click = false;
//  document.querySelector("body").addEventListener("click", (e) => {
//    if (e.target.tagName == "PIXELS") {
//      if (click) {
//        document.querySelector(".colouringMode").textContent = "Mode: off";
//        click = false;
//      } else {
//        document.querySelector(".colouringMode").textContent = "Mode: on";
//        click = true;
//      }
//    }
//  });
function resetBoard() {
  pixels = document.querySelectorAll("pixels");
  pixels.forEach((pixels) => {
    pixels.style.backgroundColor = "white";
  });
}
