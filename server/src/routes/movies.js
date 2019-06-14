import express from 'express'
import MoviesController from '../controllers/movies'

const router = express.Router()

const moviesController = new MoviesController()

router.get('/:title', (req, res) => moviesController.getMovie(req, res))
router.get('/', (req, res) => res.status(200).send({ msg: 'Hello World!' }))

export default router
