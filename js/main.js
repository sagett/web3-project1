var test = "test";
console.log(test);
var movingnetwork = document.getElementById("network"); 

/*
movingnetwork.onclick= function () {
	movingnetwork.style.top='50%';
	movingnetwork.style.left='50%';		
}
*/

var node = document.getElementsByClassName('nodejoint');

node.onclick = function () {
	node.style.top = '90%';
	node.style.left = '90%';

}
