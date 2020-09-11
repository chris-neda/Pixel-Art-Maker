// I use document.getElementById from Lesson 8.4:
// ids to be find in the html file.
// selects the DOM element with an ID of "input_...."

// Selecting color and size
var picker = document.getElementById('sizePicker');
var color  = document.getElementById('colorPicker');
var canvas = document.getElementById('pixelCanvas');
// When size is submitted by the user, call makeGrid()
picker.addEventListener('submit', function(event) {
  event.preventDefault();
  const gridHeight = document.getElementById('inputHeight').value;
  const gridWidth  = document.getElementById('inputWidth').value;
  makeGrid(gridHeight, gridWidth);
});

function makeGrid(gridHeight, gridWidth){
  // Clears the cells
  canvas.innerHTML = ''; // clear canvas
  for (let i=0; i<gridHeight; i++){
    var row = canvas.insertRow(i);
      for(let j=0; i<gridWidth; j++){
        var cell = row.insertCell(j)
      //MDN webdocs: it inserts cell into a row
      //<td> to <tr>
        cell.addEventListener('click', function(event) {
          event.target.style.backgroundColor = color.value;
        });
      }
   }
}
