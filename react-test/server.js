var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var app2 = require('http').createServer(function (req, res){
  console.log("request is coming");
});
var io = require('socket.io')(app2);
app2.listen(3001, function (){
  console.log('3001');
});

app.use(express.static('./'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.post('/public/data.json', function (req, res, next) {
  var path = __dirname + '/public/data.json';
  try {
    var data = JSON.parse(fs.readFileSync(path, "utf8"));
  } catch (e) {
    var data = [];
  }
  console.log('get data %j', req.body);
  data.push(req.body);
  fs.writeFileSync(path, JSON.stringify(data));
});
var port = 3000;
app.listen(port, function () {
  console.log("server listen in port %s", port);
});

io.on('connection', function (socket){
  console.log(socket);
  console.log("connected");
});