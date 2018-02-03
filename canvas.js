var c = document.getElementById("yes_we_canvas");
var ctx = c.getContext("2d");

var b1 = document.getElementById("clear");
var b2 = document.getElementById("toggle");

var circle = true;

var clear = function(){
    ctx.beginPath();
    ctx.clearRect(0, 0, 500, 500);
    ctx.stroke();
};

var toggle = function(){
    circle = !circle;
};

var getMousePos = function (c, evt) {
    var rect = c.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

var make_circle = function(e){
    var pos = getMousePos(c, e)
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
};

var make_square = function(e){
    var pos = getMousePos(c, e)
    ctx.beginPath(e);
    ctx.fillRect(pos.x, pos.y, 40, 40);
    ctx.stroke();
};

var make_shape = function(e){
    if (circle){
	make_circle(e);
    }
    else{
	make_square(e);
    }
};


b1.addEventListener("click", clear);
b2.addEventListener("click", toggle);
c.addEventListener("click", make_shape);
