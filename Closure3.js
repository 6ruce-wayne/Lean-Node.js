function prefix(pre){
    return function fileHandler(err,data){
        console.log(pre+ " " + data);        
    };
}
var say = prefix("Say:");
var shout = prefix("Shout:");

var fs = require('fs');
fs.readFile('hello.txt',say)
fs.readFile('hello.txt',shout)