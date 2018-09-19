console.log("Hello World");
console.log("Hello World");
console.log("Hello World");

var str = ` This is Node.js
Testing page server,
You know who made.! From HelloWorld file`;

function fn(){
    return ` This is Node.js
    Testing page server,
    You know who made.! From HelloWorld file`;
}
//First Class function
function myName(){ console.log("Romz");}

function say(){
    return function myName(){
        console.log("Hey");
    }
}

var nameFn = say();
nameFn();

