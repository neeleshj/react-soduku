import { GRID, BLOCK_COORDS } from 'typings';

export interface IReducer {
  workingGrid?: GRID;
  solvedGrid?: GRID;
  challengeGrid?: GRID;
  selectedBlock?: BLOCK_COORDS;
}
