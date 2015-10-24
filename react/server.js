var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('./'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.post('/public/data.json', function(req, res, next){
  var path = __dirname+'/public/data.json';
  var data = JSON.parse(fs.readFileSync(path, "utf8"));
  data.push(req.body);
  fs.writeFileSync(path, JSON.stringify(data));
});
var port = 3000;
app.listen(port, function (){
  console.log("server listen in port %s", port);
});
