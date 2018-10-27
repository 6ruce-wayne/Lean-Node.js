var express = require('express');
var app = express();
var logger = function(req,res,next){
    console.log(req.method,req.url);

    next();
};
var helloWorld = (function(req, res, next){
    //middleware   
    res.send('Hello World');
});
var goodbyeWorld = function(req,res,next){
    res.send('Goodbye World');    
};

app.use(logger);
app.use('/hello',helloWorld);
app.use('/goodbye',goodbyeWorld);
app.listen(3000);
console.log('Server runing at http://localhost:3000');
module.express = app;