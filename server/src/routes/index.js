import express from 'express'
import moviesRoute from './movies'

const router = express.Router()

router.use('/count', moviesRoute)

export default router
