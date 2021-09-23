var http = require('http');

http.createServer(function (request, response)
{
	var body = '';
	request.on('data', function (data)
	{
		body += data;
	});
	request.on('end', function ()
	{
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end(body);
	});
}).listen(8086);
