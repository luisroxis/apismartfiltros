const express = require ('express')
const routes = require ('./routes')
const cors =  require ('cors')
require ('./database')
const io = require('@pm2/io')

class App{
  constructor() {
    this.server= express()

    this.midllewares()
    this.routes()

    io.init({
      transactions: true,
      http:true,
      https: true
    })
  }
  midllewares() {
    this.server.use(express.json())
    this.server.use(cors())
  }
  routes() {
    this.server.use(routes)
  }

}

module.exports =  new App().server