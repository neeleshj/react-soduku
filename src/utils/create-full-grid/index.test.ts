import createFullGrid from './index';
describe('createFullGrid', () => {
  test('should return a 0x0 grid with values between 1 and 9 ', () => {
    const grid = createFullGrid();
    for (let row in grid) {
      for (let col in grid[row]) {
        expect(grid[row][col]).toBeGreaterThanOrEqual(1);
        expect(grid[row][col]).toBeLessThanOrEqual(9);
      }
    }
  });
});
