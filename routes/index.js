var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');

/* GET home page. */
router.get('/', function(req, res, next) {
	var pyshell = new PythonShell('hamtest.py');
	
	pyshell.send('');
	
	var outputmsg;
	pyshell.on('message', function(message){
		outputmsg = (message * 9/5)+ 32;
		console.log(outputmsg);
		res.render('index', { title: outputmsg });
	});
	
	pyshell.end(function(err){
		if (err) throw err;
		console.log('temp rendered');
	});
  
});

module.exports = router;
