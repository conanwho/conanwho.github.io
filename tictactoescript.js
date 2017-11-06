var character = 'O';

//this function handles the onclick event
function turn(location){
	
	
	//upadate box with character, if box is empty
	if(document.getElementById(location).innerHTML == ""){
		
			//update results div with feedback
		document.getElementById("results").innerHTML = "It's " + character + "'s turn!";
			
		//switch between X and O
		if(character == 'X'){
			character = 'O';
		}
		else{
			character = 'X';
		}
		
		document.getElementById(location).innerHTML = character;
	}
	
	
}