var express = require('express'),
	app = express(),
	oneDay = 86400000,
	port = process.env.PORT || 8000,
    ip = process.env.IP;

// compress the content before serving
app.use(express.compress());

//app.use('/parent-folder', express.static(__dirname + '/public', {maxAge: oneDay}));
app.use(express.static(__dirname + '/public', {maxAge: oneDay}));

// listen to the port
app.listen(port, ip);

//console.log('Your app is running at http://' + ip + ':' + port);
