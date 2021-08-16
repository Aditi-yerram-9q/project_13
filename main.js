canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
Width_of_the_line=2;
var last_position_of_x,last_position_of_y ;
var width=screen.width;
var new_width=width-70;
var new_height=screen.height-300;
if(width<992) {
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touch_start);
function my_touch_start(e){
color=document.getElementById("color").value;
Width_of_the_line=document.getElementById("Width_of_the_line").value ;
last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touch_move);
function my_touch_move(e) {
current_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
current_position_of_y=e.touches[0].clientY-canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=Width_of_the_line;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(current_position_of_x,current_position_of_y);
ctx.stroke();
last_position_of_x=current_position_of_x ;
last_position_of_y=current_position_of_y;
}
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
