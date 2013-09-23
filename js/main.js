var test = "test";
console.log(test);
var movingnetwork = document.getElementById("network"); 

var curX;
var curY;
var mousePostion = document.addEventListener('mousemove', function(e) {
	curX = (e.x - 620) + "px";
	curY= (e.y - 375) + "px";
	console.log(e.x, e.y)
});



movingnetwork.onclick= function () {
	movingnetwork.style.top=curY;
	movingnetwork.style.left=curX;
}









