import { GRID, NUMBERS } from 'typings';
import { Shuffle, isInCol, isInRow } from 'utils';

const gridExample = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * A backtracking/recursive function to check all the possible combinations of numbers until a solution is found
 * @param grid 9x9 Soduku Grid
 */
function fillGrid(grid: GRID) {
  let row = 0;
  let col = 0;

  for (let index = 0; index < 81; index++) {
    row = Math.floor(index / 9);
    col = index % 9;
    if (grid[row][col] === 0) {
      Shuffle(numbers);

      for (let value of numbers) {
        // Is it not in the grid now?
        if (!isInRow({ grid, row, value })) {
          // Is it not in the grid col?
          if (!isInCol({ grid, col, value })) {
            // Is it not in the grid square?

            grid[row][col] = value;
            // check grid if it is full
          }
        }
      }
      break;
    }
  }

  grid[row][col] = 0;
}

export default fillGrid;
