const app = require('./app')
const https = require('https')
const http = require('http')
const fs = require('fs')

const httpServer = http.createServer(app)

const httpsServer = https.createServer({
  key: fs.readFileSync('./src/certs/privatekey.pem'),
  cert: fs.readFileSync('./src/certs/csr.pem'),
}, app)


httpServer.listen(9000, () => {    
})


httpsServer.listen(9002, () => {    
})
