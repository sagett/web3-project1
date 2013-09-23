var test = "test";
console.log(test);
var movingnetwork = document.getElementById("network"); 

var mousePostion = document.addEventListener('mousemove', function(e) {
	console.log(e.x, e.y)
});


movingnetwork.onclick= function () {
	movingnetwork.style.top='3%';


/*	movingnetwork.style.top='mousePostion';
	movingnetwork.style.fill='#bbb';
*/	
}


/*
var node = document.getElementsByClassName('nodejoint');

node.onclick = function () {
	node.style.top = '90%';
	node.style.left = '90%';

}*/
