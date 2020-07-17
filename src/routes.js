import  { Router } from  'express'
import Brute from 'express-brute'
import BruteRedis from 'express-brute-redis'
import  UserController from './app/controllers/UserController'
import  SessionController from './app/controllers/SessionController'
import  ClientController from './app/controllers/ClientController'

import  authMiddleware from  './app/middleware/auth'

const routes = new Router()
const bruteStore = new BruteRedis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
})

const bruteForce = new Brute(bruteStore)

routes.get('/', (req, res) => {
  return res.json({ message: 'Bem vindo a SmartFiltros' })
})

routes.post('/users', UserController.store)
routes.post('/sessions',bruteForce.prevent, SessionController.store)
routes.post('/clients', ClientController.store)

routes.use(authMiddleware)
routes.put('/users', UserController.update)
routes.get('/clients', ClientController.index)
routes.post('/clientsQuery', ClientController.query)
routes.put('/clients/:id', ClientController.update)

export default routes
