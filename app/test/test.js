const sum = require('../lib/home-helper');

test('adds 1 + 2 to equal 3', () => {
    expect(sum.sum(1, 2)).toBe(3);
});