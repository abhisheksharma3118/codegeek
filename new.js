var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/';
var server = app.listen(3000, "localhost", function () {
  var host = server.address().address
  var port = server.address().port


router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/insight",function(req,res){
  res.sendFile(path + "insight.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Example app listening at http://%s:%s", host, port)
})
  });
