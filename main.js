var mouseEvent= "emptys";
var last_position_of_x, last_position_of_y;
canvas=document.getElementById("myCanvas")
ctx= canvas.getContext("2d");
color="red";
width_of_line=10;

canvas.addEventListener("mouseDown", my_mouseDown);
function my_mouseDown(e){
mouseEvent= "mouseDown";
}
canvas.addEventListener("mouseleave", my_mouseLeave);
function my_mouseLeave(e){
mouseEvent= "mouseleave";
}
canvas.addEventListener("mouseUP", my_mouseUP);
function my_mouseUP(e){
mouseEvent= "mouseUP";
}
canvas . addEventListener ("mousemove", my_mousemove) ;
function my_mousemove(e){
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent == "mouseDown") {
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
console.log("Last position of x and y coordinates = ");

console. log("x = " + last_position_of_x + "y = " + last_position_of_y);
ctx.moveTo(last_position_of_x, last_position_of_y);
console.log("Current position of x and y coordinates = ");
console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y) ;
ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y) ;
ctx.stroke();
}
last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
}