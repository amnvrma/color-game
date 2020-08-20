var numSquares=6;
var colors=generateRandomColors(numSquares);
var box=document.querySelectorAll(".box");
var pickedColor=pickColor()
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
var chancesLeft=document.querySelector("#chancesLeft");
var chancesCount=3;
var lost=document.querySelector(".lost");

colorDisplay.textContent=pickedColor;

easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numSquares=3;
	chancesCount=1;
	chancesLeft.textContent=chancesCount;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<box.length;i++)
	{
		if(colors[i])
		{
			box[i].style.backgroundColor=colors[i];
		}
		else{
			box[i].style.display="none";
		}
	}
});
hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numSquares=6;
	chancesCount=3;
	chancesLeft.textContent=chancesCount;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<box.length;i++)
	{
			box[i].style.backgroundColor=colors[i];
			box[i].style.display="block";
	}
	lost.textContent="";
});
	resetButton.addEventListener("click",function(){
	//generate all new colors
	colors=generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor=pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent=pickedColor
	//change colors of boxes
	if(numSquares===3)
	{
		chancesLeft.textContent=1;
	}
	else
	{
		chancesLeft.textContent=3;
	}
	for(var i=0;i<colors.length;i++)
	{
	box[i].style.backgroundColor=colors[i];
}
if(numSquares===3){
	chancesCount=1;
	chancesLeft.textContent=1
}
	else
	{
		chancesCount=3;
	chancesLeft.textContent=3;
	}
h1.style.backgroundColor="steelblue"

this.textContent="New colors"
messageDisplay.textContent="";
lost.textContent="";
for(var i=0;i<box.length;i++)
	{
			box[i].style.display="block";
	}

});

for(var i=0;i<colors.length;i++)
{
box[i].style.backgroundColor=colors[i];

//add event listener to boxes

box[i].addEventListener("click",function(){
	//clicked color=picked color
	if(pickedColor===this.style.backgroundColor)
	{
		messageDisplay.textContent="CORRECT!!!";
		// messageDisplay.style.font-weight=700;
		h1.style.backgroundColor=this.style.backgroundColor;
		resetButton.textContent="play again?";
		//all change to same color
		changeColors(this.style.backgroundColor)
	}
	else{
	this.style.backgroundColor="#232323";
	messageDisplay.textContent="TRY AGAIN";
	chancesCount--;
	chancesLeft.textContent=chancesCount;
	if(chancesCount<=0)
	{
		messageDisplay.textContent="";
		resetButton.textContent="play again?";
	}
	if(chancesCount===0)
{
	lost.textContent="YOU LOST";
	for (var i=0;i<colors.length;i++)
	{
		box[i].style.display="none";
	}
}

}
});
}

//to change all the box to same color
function changeColors(color)
{
	for(var i=0;i<box.length;i++)
	{
		box[i].style.backgroundColor=color;
	}
}
function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	//make an array
	var arr=[]
	//repeat num times
	for(var i=0;i<num;i++)
	{
		//get random color and push into arr
		arr.push(randomColor());
	}
	return arr
}
function randomColor()
{
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}



