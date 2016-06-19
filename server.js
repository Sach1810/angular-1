var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.static('node_modules'));

app.listen(8000);
