var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('./mime');
var path = require('path');
const os = require('os');

// 获取网络接口列表
const networkInterfaces = os.networkInterfaces();
let localIP
// 遍历网络接口列表，找到本地 IP 地址
Object.keys(networkInterfaces).forEach(interfaceName => {
    const interfaces = networkInterfaces[interfaceName];
    interfaces.forEach(interfaceInfo => {
        // 排除 loopback 地址和非 IPv4 地址
        if (interfaceInfo.family === 'IPv4' && !interfaceInfo.internal) {
            console.log(`本地 IP 地址为: ${interfaceInfo.address}`);
            localIP = interfaceInfo.address;
        }
    });
});


// http://localhost:5362/index.html
var server = http.createServer((req, res) => {
    // const url = req.url
    var reqUrl = decodeURIComponent(req.url); // 对 URL 进行解码
    var filePath = './page' + url.parse(reqUrl).pathname;
    console.log(filePath)
    if (filePath === './page') filePath = './index.html';
    if (fs.existsSync(filePath)) {
        var data = fs.readFileSync(filePath);
        var extname = path.extname(filePath);
        var contentType = mime[extname];

        res.writeHead(200, {
            'content-type': contentType
        });
        res.write(data);
        res.end();
    } else {
        res.writeHead(404, { 'content-type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(5362, () => {
    console.log('监听端口为 5362');
    console.log(`请通过 ${localIP}:5362//HTML/index.html 访问`)
});
