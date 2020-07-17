import app from './app'
import https from 'https'
import http from 'http'
import fs from 'fs'

const httpServer = http.createServer(app)

const httpsServer = https.createServer({
  key: fs.readFileSync('./src/certs/privkey.pem'),
  cert: fs.readFileSync('./src/certs/csr.pem'),
}, app)


httpServer.listen(9000, () => {
  console.log('http rodando na porta 9000')    
})


httpsServer.listen(9002, () => { 
  console.log('https rodando na porta 9002')   
})
