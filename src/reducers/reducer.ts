import { AnyAction } from 'redux';
import { IReducer } from './interfaces';
import * as types from './types';
import { createFullGrid } from 'utils';

const initialState: IReducer = {};

function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case types.CREATE_GRID:
      return {
        ...state,
        grid: createFullGrid(),
      };
    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.coords,
      };
    default:
      return state;
  }
}

export default reducer;
