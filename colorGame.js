var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var message = document.getElementById('message');
var h1 = document.querySelector("h1");
var reset = document.querySelector('#reset');
var easy = document.getElementById('easy');

easy.addEventListener('click', function() {
  easy.classList.add('selected');
  hard.classList.remove('selected'); 
  numSquares = 3
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
})

hard.addEventListener('click', function() {
  easy.classList.remove('selected');
  hard.classList.add('selected');
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];  
      squares[i].style.display ="block";
  }
});

reset.addEventListener('click', function() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  this.textContent ="New Colors";
  message.textContent ="";
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = 'steelblue'
  
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  // add click listners to squares
  squares[i].addEventListener('click', function() {
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor) {
      message.textContent ="Correct!";
      changeColor(pickedColor)
      h1.style.backgroundColor = clickedColor;
      reset.textContent = "Play Again?"
    } else {
      this.style.backgroundColor = '#232323';
      message.textContent = "Try Again";
    }
  });
}

function changeColor(color) {
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for(var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
 var r =  Math.floor(Math.random() * 256);
 var g =  Math.floor(Math.random() * 256);
 var b =  Math.floor(Math.random() * 256);
 return "rgb(" + r + ", " + g + ", " + b + ")"
}