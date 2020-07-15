var squareNum = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode"); 

init();

function init(){
	setupModeButtons();
	setupSquares();

	reset();

}

function setupModeButtons(){
	for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			
			//figure out how many squares to show
			//pick a new color
			//pick a new pickedColor
			//update page to reflect color

			this.textContent === "Easy" ? squareNum = 3 : squareNum = 6;
			reset();
		
		});
	}
}

function setupSquares(){
	for(var i = 0; i<squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				message.textContent = "Correct!";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";

			}
			else{
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
			}
		});
	}
}


function reset(){
	colors = generateRandomColors(squareNum);
	//pick a color
	pickedColor = pickColor();
	//change text of h1
	colorDisplay.textContent = pickedColor;
	//Change the colors of all the squares
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){	
			squares[i].classList.remove("display");		
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].classList.add("display");
		}
	}
	//Change the background of h1
	h1.style.backgroundColor = "steelblue";
	//Change the button text to New Colors
	resetButton.textContent = "New Colors";
	//remove the message
	message.textContent = "";
}



resetButton.addEventListener("click", function(){
	reset();

});


function changeColor(color){
	for(var i=0; i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	//math.random() will return a number between 0 upto 1
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an empty array
	var arr = [];
	//loop through the squares
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}

	return arr;
	

}

function randomColor(){
	//red
	var r = Math.floor(Math.random()*256);
	//green
	var g = Math.floor(Math.random()*256);
	//blue
	var b = Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}