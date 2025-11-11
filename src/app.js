var express = require('express');
var path = require('node:path');
var app = express()
app.use(express.static(path.join(__dirname,"..", 'public')));
app.listen(3000);
console.log('listening on port 3000');

