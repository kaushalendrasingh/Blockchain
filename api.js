var express = require('express')
var app = express()
const Blockchain = require('./blockchain')
const bodyParser = require('body-parser')

const bitcoin = new Blockchain();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
 
app.get('/blockchain', function(req, res) {
  res.send(bitcoin);
});

app.post('/transaction', function(req, res){
  console.log(req.body);
 res.send(`The amount is ${req.body.amount} bitcoin`);
});

app.get('/mine', function(req, res){

});
 
app.listen(3000, function(){
  console.log('yess Listening at port 3000 ');
  
 


})

