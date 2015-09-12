var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');

/* GET home page. */
router.get('/', function(req, res, next) {
	
	
	var options = {
		mode: 'json'
	}

	PythonShell.run('humid_temp.py', options, function(err, response){
		if (err) throw err;
		outputmsg = response[0].temperature;
		console.log(outputmsg);
		res.render('index', { title: outputmsg });
		console.log('temp rendered');
	});
  
});

module.exports = router;
