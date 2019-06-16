import axios from 'axios'

class MoviesController {
  constructor (Movies) {
    this.Movies = Movies
  }

  async getMovie (req, res) {
    try {
      const title = req.params.title
      const initialPage = 1

      let { page, total_pages: totalPages, total } = await this.getData(
        title,
        initialPage,
        res
      )

      let movies = []
      for (let i = page; i <= totalPages; i++) {
        let r = await this.getData(title, i, res)

        movies.push(...r.data)
      }

      const allYears = [...new Set(movies.map(({ Year }) => Year))].sort()

      const counter = allYears.map(y =>
        movies.filter(mv => mv.Year === y).reduce(acc => ++acc, 0)
      )

      const moviesByYear = allYears.map((year, index) => ({
        year,
        movies: counter[index]
      }))

      const response = { moviesByYear, total }

      res.status(200).json(response)
    } catch (error) {
      return res.status(200).send({ message: 'No movies found!' })
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
