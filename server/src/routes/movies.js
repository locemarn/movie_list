import express from 'express'

const router = express.Router()

router.get('/', (req, res) => res.status(200).send({ msg: 'Hello World!' }))

export default router
