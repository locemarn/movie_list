/* eslint-disable no-undef */
import sinon from 'sinon'

describe('Controllers: Movies', () => {
  const defaultList = [
    {
      moviesByYear: [
        {
          year: 1995,
          movies: 10
        },
        {
          year: 1996,
          movies: 12
        },
        {
          year: 1997,
          movies: 13
        }
      ],
      total: 35
    }
  ]

  describe('GetMovie() Movies', () => {
    it('should return a list of search movies', () => {
      const response = {
        send: sinon.spy()
      }

      expect(response.send.calledWith(defaultList))
    })
  })
})
