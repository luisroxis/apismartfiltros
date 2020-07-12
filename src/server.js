const app = require('./app')
const https = require('https')
const http = require('http')
const fs = require('fs')

const httpServer = http.createServer(app);
const httpsServer = https.createServer({
  key: fs.readFileSync('./src/certs/privatekey.pem'),
  cert: fs.readFileSync('./src/certs/csr.pem'),
}, app);

httpServer.listen(9001, () => {
    console.log('HTTP Server running on port 9001');
});

httpsServer.listen(9002, () => {
    console.log('HTTPS Server running on port 9002');
});
