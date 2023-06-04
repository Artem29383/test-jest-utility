const thumbWar = require('../thumb-war')
const utilsMock = require('../utils')

jest.mock('../utils')

test('returns winner', () => {
  const winner = thumbWar('Artem', 'Anna')
  expect(winner).toBe('Artem')
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ['Artem', 'Anna'],
    ['Artem', 'Anna']
  ])

  // cleanup

  utilsMock.getWinner.mockReset()
})
