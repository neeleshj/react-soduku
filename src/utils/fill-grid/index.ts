import { GRID, NUMBERS } from 'typings';
import { shuffle, isInCol, isInRow, identifySqaure } from 'utils';
import { isInSquare } from 'utils/is-in';
import checkGrid from 'utils/check-grid';


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
      shuffle(numbers);

      for (let value of numbers) {
        if (!isInRow({ grid, row, value })) {
          if (!isInCol({ grid, col, value })) {
            const square = identifySqaure({ col, grid, row });
            if (!isInSquare({ square, value })) {
              grid[row][col] = value;
              if (checkGrid(grid)) return true;
              else if (fillGrid(grid)) return true;
            }
          }
        }
      }
      break;
    }
  }

  grid[row][col] = 0;
}

export default fillGrid;
