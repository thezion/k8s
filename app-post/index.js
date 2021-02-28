const http = require('http');
const serviceName = 'Post Service';
const servicePort = 5002;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`Hello from ${serviceName} - ${new Date().toISOString()}`);
}

const server = http.createServer(requestListener);
server.listen(servicePort);

console.info(`${serviceName} is running on port ${servicePort}`);
