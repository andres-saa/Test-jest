const selectionSort = require ('../views/algoritmos/selectionSort');

test('cadena longitud 0', () => {
    expect(selectionSort([])).toStrictEqual([]);
});

test('cadena unitaria', () => {
    expect(selectionSort([1])).toStrictEqual([1]);
});

test('cadena ordenada de forma ascendente', () => {
    expect(selectionSort([1,2])).toStrictEqual([1,2]);
});

test('cadena ordenada de forma descente', () => {
    expect(selectionSort([2,1])).toStrictEqual([1,2]);
});
