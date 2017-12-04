
//draws random circle in clickpanel
function randomCircle(){
	
	//randomly get top positions
	document.getElementById("circle").style.top = randomNum();
	
	//randomly get left positions
	document.getElementById("circle").style.left = randomNum();
}

//handles onclick event
//when a random circle is clicked in clickpanel, it disapears
//then generates a new circle
function clickCircle(){
	
	//circle is clicked, hide circle
	document.getElementById("circle").style.visibility = "hidden";
	
	//move circle
	randomCircle();
	
	//generate random circle
	document.getElementById("circle").style.visibility = "visible";

}

function randomNum(){
	return Math.floor(Math.random() * 200);
	
}