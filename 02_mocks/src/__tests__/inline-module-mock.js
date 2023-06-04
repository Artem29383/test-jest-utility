const thumbWar = require('../thumb-war')
const utilsMock = require('../utils')
const utils = require("../utils");

jest.mock('../utils', () => {
  return {
    getWinner: jest.fn((p1, p2) => p1)
  }
})

test('returns winner', () => {
  const winner = thumbWar('Artem', 'Anna');
  expect(winner).toBe('Artem');
  expect(utils.getWinner.mock.calls).toEqual([
    ['Artem', 'Anna'],
    ['Artem', 'Anna']
  ])

  // cleanup
  utils.getWinner.mockReset();
})
