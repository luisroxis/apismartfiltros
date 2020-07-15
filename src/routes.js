const { Router } = require ('express')
const UserController = require ('./app/controllers/UserController')
const SessionController = require ('./app/controllers/SessionController')
const ClientController = require ('./app/controllers/ClientController')

const authMiddleware = require ('./app/middleware/auth')

const routes = new Router()


routes.get('/', (req, res) => {
  return res.json({ message: 'Bem vindo a SmartFiltros' })
})

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)
routes.post('/clients', ClientController.store)

routes.use(authMiddleware)
routes.put('/users', UserController.update)
routes.get('/clients', ClientController.index)
routes.post('/clientsQuery', ClientController.query)
routes.put('/clients/:id', ClientController.update)

module.exports =  routes
