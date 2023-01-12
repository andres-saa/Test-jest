const bubblesort = require ('../views/algoritmos/bubbleSort');

test('cobertura 100%', () => {
    expect(bubblesort([5,3,7])).toStrictEqual([3,5,7]);
});

