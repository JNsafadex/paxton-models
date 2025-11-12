var express = require('express');
var path = require('node:path');
var {Modelo, Oferta} = require("./classes.js")

var app = express()
app.use(express.static(path.join(__dirname,"..", 'public')));
var models = []

app.post("/criar_usuario", (req,res) =>{
  let {nome, foto, lat, long} = req.body
  models.push(new Modelo(nome,foto,lat,long))
  
})

app.listen(3000);
console.log('listening on port 3000');

