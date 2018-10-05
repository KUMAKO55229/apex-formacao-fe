

function teste(){
    var  element =  document.getElementsByTagName('div');
    element[0].innerHTML = 'Hello word';
    return element ;
};


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,75);