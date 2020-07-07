import { Router } from 'express'
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import ClientController from './app/controllers/ClientController'

import authMiddleware from './app/middleware/auth'

const routes = new Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'Bem vindo a SmartFiltros' })
})

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)
routes.post('/clients', ClientController.store)

routes.use(authMiddleware)
routes.put('/users', UserController.update)

export default routes
