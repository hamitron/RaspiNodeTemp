var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');

/* GET home page. */
router.get('/', function(req, res, next) {
	var pyshell = new PythonShell('faketemp.py');
	
	pyshell.send('');
	
	var outputmsg;
	pyshell.on('message', function(message){
		console.log(message);
		outputmsg = message;
		res.render('index', { title: outputmsg });
	});

  
});

module.exports = router;
