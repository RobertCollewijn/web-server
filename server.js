/**
 * Created by Robert on 18-9-2016.
 */


var express = require("express");
var app = express();
const PORT = 3000;

var middleware={
    requireAuthentication: function(req,res,next){
        console.log("private route hit");
        next();
    },
    logger:function(req,res,next){
        new Date().toString();
      console.log(("Request: " + new Date().toString() + " "+ req.method + " " + req.originalUrl));

        next();
    }
}

app.use(middleware.logger);
//app.use(middleware.requireAuthentication)
/*

app.get("/",function(req,res){
    res.send("hello express");
});

 */
app.get('/about',middleware.requireAuthentication,function (req,res) {
   res.send("<h1>About us !!</h1>")
});

app.use(express.static(__dirname + '/public'));
console.log(__dirname);


app.listen(PORT,function(){
    console.log("Express server started on port: " + PORT);
});

