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
      let data = []
      let back = {
        moviesByYear: [],
        total: 0
      }

      for (let i = getdata.page; i < getdata.total_pages; i++) {
        let r = await this.getData(title, i, res)
        data.push(r.data)
      }
      data = data.reduce((a, b) => a.concat(b))

      let categories = []
      for (let obj of data) {
        if (!categories.includes(obj.Year)) {
          categories.push(obj.Year)
        }
      }

      categories = categories.sort()

      let year = categories.map(cat => {
        let dt = data.filter(fil => {
          return fil.Year === cat
        })
        return dt
      })

      let count = []

      for (let i = 0; i < year.length; i++) {
        count.push(year[i].length)
      }

      for (let i = 0; i < count.length; i++) {
        back.moviesByYear.push({
          year: categories[i],
          Movies: count[i]
        })
        back.total = getdata.total
      }

      res.status(200).send(back)
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
