var numSquares = 6;
var colors = [];
var aimColor;
var squares = document.querySelectorAll(".square")
var replay = document.querySelector("#replay");
var h1 = document.querySelector("h1");
var mode = document.querySelectorAll(".mode");
document.querySelector("#displayColor").textContent = aimColor;

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  for (var i = 0; i < mode.length; i++) {
    mode[i].addEventListener("click", function(){
      mode[0].classList.remove("selected");
      mode[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "EASY"? numSquares = 3 : numSquares = 6;
      //figure out how many squares to show
      // show new colors
      //get a new aimColor
      //update page to reflect
        reset();
    })
  }
}

function setupSquares(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      var colorPicked = this.style.background;
      console.log(colorPicked + " " + aimColor);
      if (colorPicked === aimColor){
            document.getElementById("answer").textContent = "Correct!!";
              changeColors(aimColor);
              replay.textContent = "PLAY AGAIN? ";
              document.querySelector("h1").style.background = aimColor;
      }else {
         this.style.background = "#232323";
        document.getElementById("answer").textContent = "Try again!!";

      }
    });
  }
}

function reset(){
  // generate new color
  colors = generateArray(numSquares)
  // pick a new picked color
  aimColor = aimColors();
  document.getElementById("answer").textContent = "";
  document.querySelector("#displayColor").textContent = aimColor;
  //display new colors on the screen.
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    }else{
      squares[i].style.display = "none";
    }

  }
  replay.textContent = "NEW COLORS";
  h1.style.background = "steelblue";
}

replay.addEventListener("click", reset);



function changeColors(color){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function aimColors(){
  return colors[Math.floor(Math.random()*numSquares)];
}

function pickColor(){
  var r = Math.floor(Math.random()* 256);
  var g = Math.floor(Math.random()* 256);
  var b = Math.floor(Math.random()* 256);
  var color ="("+ r+ ", " + g+ ", " +b+")";
  return ("rgb" + color);
}

function generateArray(num){
  // create an generateArray
  var arr = [];
  //add random colors to Array
  for (var i = 0; i < num; i++) {
     arr.push(pickColor());
  }
  //return that array
  return arr;
}
