// requires

var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var router     = require('./core/views/default.js');
var express    = require('express');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// routes for '/api/'
var apiRouter = express.Router();

apiRouter.get('/', function(req, res) {
	res.json({ message: 'Hello from api!'});
});

app.use(router);
app.use('/api', apiRouter);

app.listen(port);

console.log('server started on port: ' + port);


module.exports = app;