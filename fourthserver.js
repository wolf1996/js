
var express = require('express');
var app = express();
app.use(express.static('static'));
app.get('/static/html/:name', function (req, res, next) {
var options = {
	root: './',
	dotfiles: 'deny',
	headers: {
		'x-timestamp': Date.now(),
		'x-sent': true
	}
};
var fileName = req.params.name;
res.sendFile(fileName, options, function (err) {if (err) {
	console.log(err);
	res.status(err.status).end();
}
else {
	console.log('Sent:', fileName);
}
});
})
var server = app.listen(8080, function () {
var host = server.address().address;var port = server.address().port;
	console.log('Example app listening at http://%s:%s',host, port)
});