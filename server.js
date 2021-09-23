var http = require('https');
var formidable = require('formidable');

http.createServer(function (req, res)
{
	var form = new formidable.IncomingForm();
	form.parse(req, (err, fields, files) =>
	{
		res.writeHead(200, { 'content-type': 'application/json' });
		res.end(JSON.stringify({ fields, files }, null, 2));
	});
}).listen(8086);
