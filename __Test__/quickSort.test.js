const {quickSort, partition} = require('../views/algoritmos/quickSort');

///////tests partition
test('test partition path1 =>', () => {
  expect(partition([1], 1, 0)).toBe(1);
});

test('test partition path2 =>', () => {
    expect(partition([1,3,2], 0, 2)).toBe(2);
});

test('test partition path3 =>', () => {
    expect(partition([3,2,1], 0, 2)).toBe(2);
});
test('test partition path4 =>', () => {
  expect(partition([3,1], 0, 1)).toBe(1);
});

///////tests quickSort

test('quicksort basis path1 =>', () => {
  expect(quickSort([1], 0, 0)).toEqual([1]);
});

test('quicksort basis path2 =>', () => {//sin definir caso de prueba
  expect(quickSort([3,2,1], 0, 2)).toEqual([1,2,3]);
});

test('quicksort basis path3 =>', () => {
  expect(quickSort([1,2,3], 0, 2)).toEqual([1,2,3]);
});

test('quicksort basis path4 =>', () => {
  expect(quickSort([2,1,3], 0, 2)).toEqual([1,2,3]);
});
