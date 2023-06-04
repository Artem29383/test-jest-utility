const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  jest.spyOn(utils, 'getWinner');
  // its not need anymore here ... const originalGetWinnerFN = utils.getWinner;
  utils.getWinner.mockImplementation((p1, p2) => p1);

  const winner = thumbWar('Artem', 'Anna');
  expect(winner).toBe('Artem');
  expect(utils.getWinner.mock.calls).toEqual([
    ['Artem', 'Anna'],
    ['Artem', 'Anna']
  ])

  // cleanup
  utils.getWinner.mockRestore();
})
