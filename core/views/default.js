// routes for '/'
var express    = require('express');

var router = express.Router();


router.get('/', function(req, res) {
	res.send('Velkommen!')
})


module.exports = router;