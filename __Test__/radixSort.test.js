const {radixSort, getDigit, digitCount, mostDigits} = require('../views/algoritmos/radixSort');

///////tests getDigit
test('test getDigit path1', () => {
    expect(getDigit(100, 1)).toBe(0);
});

///////tests digitCount
test('test digitCount path1', () => {
    expect(digitCount(100000)).toBe(6);
});

///////tests mostDigits
test('test mostDigits path1', () => {
    expect(mostDigits([])).toBe(0);
});

test('test mostDigits path2', () => {
    expect(mostDigits([100])).toBe(3);
});

///////tests radixSort
test('test radixSort path1', () => {
    expect(radixSort([])).toEqual([]);
});

test('test radixSort path2', () => {
    expect(radixSort([2,1])).toEqual([1,2]);
});