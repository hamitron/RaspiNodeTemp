var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');

/* GET home page. */
router.get('/', function(req, res, next) {
	
	
	PythonShell.run('hamtest.py', function(err, response){
		if (err) throw err;
		outputmsg = (response * 9/5)+ 32;
		console.log(outputmsg);
		res.render('index', { title: outputmsg });
		console.log('temp rendered');
	});
  
});

module.exports = router;
