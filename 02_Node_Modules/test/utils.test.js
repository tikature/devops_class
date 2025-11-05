const { tambah } = require('../src/utils');

test('menjumlahkan dua angka', () => {
    expect(tambah(2, 3)).toBe(5);
});

test('Mengurangkan dua angka', () => {
    expect(kurang(5, 3)).toBe(2);
});