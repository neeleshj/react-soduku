import { NUMBERS, GRID } from 'typings';

interface IInput {
  grid: GRID;
  row: number;
  value: NUMBERS;
}

/**
 * A function that returns true if the value is in the current grid row
 * @param param0 Object with 9x9 Soduku Grid, row index and value
 */
function isInRow({ grid, row, value }: IInput): boolean {
  return grid[row].includes(value);
}

export default isInRow;
