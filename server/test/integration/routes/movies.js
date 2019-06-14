/* eslint-disable no-undef */
import MoviesController from '../../../src/controllers/movies'

describe('Routes: Movies', () => {
  const moviesController = new MoviesController()

  describe('GET /api/movies/count/:movie', () => {
    context('when a movie exist', () => {
      it('should return a list of a movie', async () => {
        const res = await moviesController.getData('City', 1)
        expect(res.data[0]).to.be.an('object')
        expect(res.data[0]).to.have.all.keys('Title', 'Year', 'imdbID')
        expect(res.page).to.have.string('1')
      })
    })

    context('when a movie does not exist', () => {
      it('parameter movie does not match', async () => {
        const res = await moviesController.getData('sdsasd', 1)
        expect(res.page).to.have.string('1')
        expect(res.total).to.eql(0)
        expect(res.total_pages).to.eql(0)
        expect(res.data.length).to.eql(0)
      })
    })
  })
})
