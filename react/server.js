var express = require('express');
var app = express();
app.use(express.static('./'));

app.post('/public/data.json', function(req, res, next){

});
app.listen(3000);
