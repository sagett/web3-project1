var test = "test";
console.log(test);
var movingnetwork = document.getElementById("network"); 

var mouseX = MouseEvent.screenX;
var mouseY = MouseEvent.screenY;

console.log(mouseX);

movingnetwork.onclick= function () {
	movingnetwork.style.top=mouseX;
	movingnetwork.style.left= mouseY;		
}


/*
var node = document.getElementsByClassName('nodejoint');

node.onclick = function () {
	node.style.top = '90%';
	node.style.left = '90%';

}*/
