import express from 'express'
import taskThing from './taskThing'

const router = express.Router()

// All API routes are automatically prefixed with /api (see server/index.js file)

router.get('/tasklist', taskThing)

// Add new REST API routes here

export default router
