import { NUMBERS, GRID } from 'typings';

interface IInput {
  grid: GRID;
  col: number;
  value: NUMBERS;
}

/**
 * A function that returns true if the value is in the current grid col
 * @param param0 Object with 9x9 Soduku Grid, col index and value
 */
function isInCol({ grid, col, value }: IInput): boolean {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) return true;
  }
  return false;
}

export default isInCol;
