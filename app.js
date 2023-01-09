const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.port || 3000;

/*
app.get('/views',function(req,res){
    res.sendFile(path.join(__dirname, '/index.js'));
    //__dirname : It will resolve to your project folder.
  });
*/

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname, '/index.html'));
  //__dirname : It will resolve to your project folder.
});

//app.use('/', router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
var server = app.listen(port, () => {console.log('Running at Port %d', server.address().port)});
