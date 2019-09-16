var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");

var halfWidth = canvas.width/2;
var halfHeight = canvas.height/2;
var halfhalfWidth = canvas.width/4;
var halfhalfHeight = canvas.height/4;

var eye_r = 0;
if(halfWidth > halfHeight){
    eye_r = halfHeight / 3
}
else{
    eye_r = halfWidth / 3;
}

ctx.fillStype = "blue";
ctx.beginPath();
ctx.arc(halfWidth - halfhalfWidth, halfHeight - halfhalfHeight, eye_r, 0, Math.PI * 2, true);
ctx.fill();