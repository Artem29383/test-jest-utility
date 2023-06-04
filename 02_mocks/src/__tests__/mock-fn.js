const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinnerFN = utils.getWinner;
  utils.getWinner = jest.fn((p1, p2) => p1);

  const winner = thumbWar('Artem', 'Anna');
  expect(winner).toBe('Artem');
  expect(utils.getWinner.mock.calls).toEqual([
      ['Artem', 'Anna'],
      ['Artem', 'Anna']
  ])
  // expect(utils.getWinner).toHaveBeenCalledTimes(2);
  // expect(utils.getWinner).toHaveBeenCalledWith('Artem', 'Anna');
  // expect(utils.getWinner).toHaveBeenNthCalledWith(
  //     1,
  //     'Artem',
  //     'Anna'
  // );
  // expect(utils.getWinner).toHaveBeenNthCalledWith(
  //     2,
  //     'Artem',
  //     'Anna'
  // );

  // cleanup
  utils.getWinner = originalGetWinnerFN;
})
