const app = require('./app')
const https = require('https')
const http = require('http')
const fs = require('fs')

const httpServer = http.createServer(app)

const httpsServer = https.createServer({
  key: fs.readFileSync('  /etc/letsencrypt/live/api.smartfiltros.com.br/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/api.smartfiltros.com.br/fullchain.pem'),
}, app)


httpServer.listen(9000, () => {    
})


httpsServer.listen(9002, () => {    
})
