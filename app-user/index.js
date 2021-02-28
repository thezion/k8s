const http = require('http');
const serviceName = 'User Service';
const servicePort = 5001;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`Hello from ${serviceName} - ${new Date().toISOString()}`);
}

const server = http.createServer(requestListener);
server.listen(servicePort);

console.info(`${serviceName} is running on port ${servicePort}`);
