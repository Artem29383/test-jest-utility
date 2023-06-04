const {sumAsync, subtractAsync} = require('./../math')

// test('sumTest', () => {
//     const result = sum(3, 7)
//     const expected = 10
//     expect(result).toBe(expected)
// });
//
// test('subtractTest', () => {
//     const result = subtract(7, 3)
//     const expected = 4
//     expect(result).toBe(expected)
// });

test('sumAsync adds numbers test', async () => {
    const result = await sumAsync(3, 7)
    const expected = 10
    expect(result).toBe(expected)
})

test('subtractAsync adds numbers test', async () => {
    const result = await subtractAsync(7, 3)
    const expected = 4
    expect(result).toBe(expected)
})
