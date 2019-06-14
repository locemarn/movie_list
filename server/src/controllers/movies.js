import axios from 'axios'

class MoviesController {
  constructor (Movies) {
    this.Movies = Movies
  }

  async getMovie (req, res) {
    try {
      const title = req.params.title
      const page = 1

      let getdata = await this.getData(title, page, res)

      res.status(200).send(getdata)
    } catch (error) {
      return res.status(400).send(error.message)
    }
  }

  async getData (title, page, res) {
    try {
      const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${title}&page=${page}`

      const data = await axios
        .get(url)
        .then(res => res.data)
        .catch(err => res.status(400).send(err.message))

      return data
    } catch (e) {
      res.status(400).send(e.message)
    }
  }
}

export default MoviesController
