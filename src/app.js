var express = require('express');
var path = require('node:path');
var {Modelo, Oferta} = require("./classes.js")

var app = express()
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({extended: true, limit:"10mb"}))
app.use(express.static(path.join(__dirname,"..", 'public')));
app.set("view engine", "ejs")
var models = []

app.post("/criar_usuario", (req,res) =>{
  let {nome, foto, lat, long} = req.body
  ind = models.length
  models.push(new Modelo(nome,foto,lat,long))
  console.log(models[ind])
  res.json({chave:models[ind].chave_login})
})
app.get("/login/:senha", (req, res) => {
  let {senha} = req.params
  let model = models.find((model) => model.chave_login == senha)
  res.render("perfilModelo.ejs", model) 
})
app.get("/pag_adm", (_, res) => {
  res.render("pagAdm.ejs", {models})
})
app.post("/aceitar", (req, res) => {
  let {senha, preco} = req.body
  let model = models.find((model) => model.chave_login == senha)
  model.status = 1
  model.preco = preco
  res.json({status:1})
})
app.post("/rejeitar", (req, res) => {
  let {senha} = req.body
  let model = models.find((model) => model.chave_login == senha)
  model.status = 2
  res.json({status:1})
})
app.post("/mudar_preço", (req, res) => {
  let {senha, preco} = req.body
  let model = models.find((model) => model.chave_login == senha)
  model.preco = preco
  res.json({status:1})
})
app.get("/pag_empresa", (_, res) => {
  res.render("pagEmpresa.ejs", {models})
})
app.get("/fazer_oferta/:senha/:tipo/:tempo/:comp/:preco", (req, res) => {
  let {tipo, tempo, comp, preco, senha} = req.params
  let model = models.find((model) => model.chave_login == senha)
  model.ofertas.push(new Oferta(comp, tempo, preco, tipo))
  res.json({status:1})
})

app.listen(3000);
console.log('listening on port 3000');

