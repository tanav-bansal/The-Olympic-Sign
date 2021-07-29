anvas = document.getElementById("my_ca");
ctx= canvas.getContext("2d");


color= "red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

color= "green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(280,200,40,0,2*Math.PI);
ctx.stroke();

color= "blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(360,200,40,0,2*Math.PI);
ctx.stroke();

color= "yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(440,200,40,0,2*Math.PI);
ctx.stroke();

color= "orange";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(230,268,40,0,2*Math.PI);
ctx.stroke();

color= "violet";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(310,268,40,0,2*Math.PI);
ctx.stroke();

color= "deeppink";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(390,268,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y =e.clientY-canvas.offsetTop;
    circle(mouse_x , mouse_y);

}

function circle(mouse_x , mouse_y ){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}
function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
}
