var number = [4,9,16,25,"TT"];
const loop = function(x){
    return console.log(x);
}

number.forEach(loop); 

var x = 0;
var callbacks = [
    function(){console.log(1);},
    function(){console.log(2);},
    function(){ x = 1+2;},
    function(){console.log(x);} ];

function call(fn){
     fn();
    }
callbacks.forEach(call);

console.log(number[4]);
