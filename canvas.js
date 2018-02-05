var c = document.getElementById("yes_we_canvas");
var ctx = c.getContext("2d");

var b1 = document.getElementById("clear");

var clear = function(){
    ctx.beginPath();
    ctx.clearRect(0, 0, 500, 500);
    ctx.stroke();
};

var make_circle = function(e){
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
};


var make_shape = function(e){
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    make_circle(e)
};


b1.addEventListener("click", clear);
c.addEventListener("click", make_shape);
