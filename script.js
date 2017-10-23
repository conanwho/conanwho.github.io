//create a list of strings, to hold 8 ball responses
var list = ["Yes",
			"No",
			"It's decidedly so",
			"Outlook not so good",
			"Concentrate and try again",
			"Try again",
			"Don't count on it.",
			"My reply is no",
			"Signs point to yes",
			"Reply hazy, try again"];


//this function responds with a fortune
//when click the magic 8 ball image
function shakeMagic8Ball(){
	//alert("test");
	
	//grab image by id 
	document.getElementById("magic8ball").src="magic8ballback.jpg";
	
	//grab the results
	document.getElementById("results").innerHTML=list[5];
	
	//alert(list[5]);
	
}