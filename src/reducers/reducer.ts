import { AnyAction } from 'redux';
import { IReducer } from './interfaces';
import * as types from './types';
import { createFullGrid, removeNumbers, copyGrid, compareArrays } from 'utils';
import { GRID } from 'typings';

const initialState: IReducer = {};

function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case types.CREATE_GRID:
      const solvedGrid = createFullGrid();
      const gridCopy = copyGrid(solvedGrid);
      const challengeGrid = removeNumbers(gridCopy);
      const workingGrid = copyGrid(challengeGrid);
      return {
        ...state,
        solvedGrid,
        challengeGrid,
        workingGrid,
      };
    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.coords,
      };
    case types.FILL_BLOCK:
      if (state.workingGrid && state.solvedGrid) {
        if (
          state.solvedGrid[action.coords[0]][action.coords[1]] !== action.value
        ) {
          alert('Incorrect Option!');
          return state;
        }
        state.workingGrid[action.coords[0]][action.coords[1]] = action.value;
        if (compareArrays(state.workingGrid, state.solvedGrid)) {
          alert('Completed!');
        }
        return {
          ...state,
          workingGrid: [...state.workingGrid] as GRID, // This is spread because it needs to return a new working grid for persis
        };
      }
      return state;
    default:
      return state;
  }
}

export default reducer;
