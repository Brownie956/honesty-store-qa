var http = require('http');
var httpProxy = require('http-proxy');

let proxy = httpProxy.createProxyServer({});
proxy.on('proxyReq', function(proxyReq, req, res, options) {
    console.log('Handling proxy request');
    if (req.url.match(/slack.com\/api\/chat\.postMessage.*/)){
        console.log('slack');
        proxyReq = new http.ServerResponse({ok: 200});
    }
});

port = 4000;

let server = http.createServer(function(req, res) {
    console.log(req.url); 
    // if (req.url.match(/slack.com\/api\/chat\.postMessage.*/)){
    //     console.log('slack');
    //     res = new http.ServerResponse({ok: 200});
    // }
    // else {
    //     console.log('No slack');
    //     proxy.web(req, res, {target: 'http://localhost:3000/'});
    // }
    proxy.web(req, res, {target: 'http://localhost:3000/'});
});


console.log(`Running proxy server on localhost:${port}`);
server.listen(port);
