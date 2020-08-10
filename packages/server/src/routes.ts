import express from 'express'

import classesController from './controllers/ClassesController'
import connectionsController from './controllers/ConnectionsController'

const routes = express.Router()

routes.post('/classes', classesController.create)
routes.get('/classes', classesController.index)

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

export default routes
