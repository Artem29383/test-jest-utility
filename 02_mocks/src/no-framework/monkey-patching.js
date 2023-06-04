const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

function noop() {}

function fn(impl = noop) {
    const mockFn = (...args) => {
        mockFn.mock.calls.push(args);
        return impl(...args);
    }

    mockFn.mock = {calls: []}
    mockFn.mockImplementation = (newImpl) => (impl = newImpl);
    return mockFn;
}

function spyOn(object, prop) {
    const originalValue = object[prop];
    object[prop] = fn()
    object[prop].mockRestore = () => (object[prop] = originalValue)
}

spyOn(utils, 'getWinner');
utils.getWinner.mockImplementation((p1, p2) => p1);

const winner = thumbWar('Artem', 'Anna');
assert.strictEqual(winner, 'Artem');
assert.deepStrictEqual(utils.getWinner.mock.calls, [
    ['Artem', 'Anna'],
    ['Artem', 'Anna']
])
console.log('utils.getWinner', utils.getWinner.mock.calls)

utils.getWinner.mockRestore();

// const thumbWar = require('../thumb-war');
// const utils = require('../utils');
//
// // Реализация функции spyOn
// function spyOn(obj, methodName) {
//     const originalMethod = obj[methodName];
//     const calls = [];
//
//     obj[methodName] = function (...args) {
//         calls.push(args);
//         return originalMethod.apply(this, args);
//     };
//
//     obj[methodName].mockCalls = calls;
// }
//
// // Реализация функции mockImplementation
// function mockImplementation(obj, methodName, implementation) {
//     obj[methodName] = implementation;
// }
//
// // Реализация функции mockRestore
// function mockRestore(obj, methodName) {
//     obj[methodName] = obj[methodName].originalMethod;
// }
//
// test('returns winner', () => {
//     spyOn(utils, 'getWinner');
//     // const originalGetWinnerFN = utils.getWinner; - не нужно здесь больше
//
//     mockImplementation(utils, 'getWinner', (p1, p2) => p1);
//
//     const winner = thumbWar('Artem', 'Anna');
//     expect(winner).toBe('Artem');
//     expect(utils.getWinner.mockCalls).toEqual([
//         ['Artem', 'Anna'],
//         ['Artem', 'Anna']
//     ]);
//
//     // cleanup
//     mockRestore(utils, 'getWinner');
// });


// const originalGetWinnerFN = utils.getWinner;
// utils.getWinner = fn((p1, p2) => p1);
//
// const winner = thumbWar('Artem', 'Anna');
// assert.strictEqual(winner, 'Artem');
// assert.deepStrictEqual(utils.getWinner.mock.calls, [
//     ['Artem', 'Anna'],
//     ['Artem', 'Anna']
// ])
// console.log('utils.getWinner', utils.getWinner.mock.calls)
//
// utils.getWinner = originalGetWinnerFN;
