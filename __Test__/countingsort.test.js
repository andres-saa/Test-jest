const countingSort = require ('../views/algoritmos/countingSort');

test('cobertura 100%', () => {
    expect(countingSort([6,2,4,4,5],0,9)).toStrictEqual([2, 4, 4, 5, 6]);
});