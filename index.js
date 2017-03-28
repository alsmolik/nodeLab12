const http = require("http");

http.createServer(function(req, res) {
    res.end("Hello, world 2!");
}).listen(process.env.PORT || 5000);