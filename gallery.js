

var list = ["Sword-art-online-kirito-swords_Dragon_Slayers.jpg","accel World.jpg","ozpin.jpg","fatestay night.jpg"];

var imagevalue=0

function prev(){ 
if (imagevalue>0){
	imagevalue=imagevalue-1;
document.getElementById("gallery").src = list[imagevalue];
	
}	

}

function next(){ 
if (imagevalue<list.length-1){
	imagevalue=imagevalue+1;
document.getElementById("gallery").src = list[imagevalue];
	
	
}
	
}

