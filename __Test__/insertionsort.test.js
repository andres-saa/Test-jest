const insertionSort = require ('../views/algoritmos/insertionSort');

test('cobertura 100%', () => {
    expect(insertionSort([3,8,2,5])).toStrictEqual([2,3,5,8]);
});