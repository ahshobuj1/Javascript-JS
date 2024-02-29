const can = document.querySelector("#myCanvas");

const ctx = can.getContext("2d");



ctx.lineWidth = 4;
ctx.strokeStyle = "red"; //* stroke for border
ctx.strokeRect(14,14,300,250);

ctx.fillStyle = "green" ;   //* fillRect for Rectangle
ctx.fillRect(15,15,295,245);



const centerX = can.width / 2 ;  //* find center
const centerY = can.height / 2 ;

ctx.beginPath();
ctx.arc(centerX, centerY, 50, 0, 2*Math.PI,false);      
ctx.fillStyle = "red";
ctx.fill();
ctx.strokeStyle = "pink";
ctx.stroke();
