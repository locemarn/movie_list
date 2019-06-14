import axios from 'axios'

class MoviesController {
  async getMovie (req, res) {
    try {
      res.status(200).send({ message: 'Hello World' })
    } catch (error) {
      return res.status(400).send(error.message)
    }
  }
}

export default MoviesController
