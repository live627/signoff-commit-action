const http = require('http');
const formidable = require('formidable');

http.createServer((req, res) => {
	const form = new formidable.IncomingForm();
	form.parse(req, (err, fields, files) =>
	{
		res.writeHead(200, { 'content-type': 'application/json' });
		res.end(JSON.stringify({ fields, files }, null, 2));
	});
}).listen(8086);
