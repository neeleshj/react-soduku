import { GRID } from 'typings';
import { getRandomIndex } from 'utils';
import copyGrid from 'utils/copy-grid';

/**
 * Removes numbers from a full grid to create a soduku puzzle
 * @param grid 9x9 soduku grid
 * @param attempts number of attempts to solve, higher is more difficul
 */
function removeNumbers(grid: GRID, attempts: number = 5): GRID {
  while (attempts > 0) {
    let row = getRandomIndex();
    let col = getRandomIndex();

    while (grid[row][col] === 0) {
      row = getRandomIndex();
      col = getRandomIndex();
    }

    const backup = grid[row][col];
    grid[row][col] = 0;

    const gridCopy = copyGrid(grid);
  }

  return grid;
}

export default removeNumbers;
