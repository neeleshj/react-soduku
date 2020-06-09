import React, { FC, Dispatch } from 'react';
import { Container } from './styles';

import { IReducer, selectBlock } from 'reducers';
import { useSelector, useDispatch } from 'react-redux';
import { N, INDEX } from 'typings';
import { AnyAction } from 'redux';

interface IProps {
  colIndex: INDEX;
  rowIndex: INDEX;
}

interface IState {
  value: N;
  isActive: boolean;
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(({ grid, selectedBlock }) => ({
    isActive: selectedBlock
      ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
      : false,
    value: grid ? grid[rowIndex][colIndex] : 0,
  }));

  const dispatch = useDispatch<Dispatch<AnyAction>>();

  function handleClick(): void {
    dispatch(selectBlock([rowIndex, colIndex]));
  }

  return (
    <Container
      active={state.isActive}
      data-cy={`block-${rowIndex}-${colIndex}`}
      onClick={handleClick}
    >
      {state.value === 0 ? '' : state.value}
    </Container>
  );
};

export default Block;
