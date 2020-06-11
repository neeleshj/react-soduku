import React, { FC, Dispatch, useCallback, useEffect } from 'react';
import { Container, Row } from './styles/index';
import Block from './block';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { createGrid, IReducer, selectBlock } from 'reducers';
import { INDEX, BLOCK_COORDS } from 'typings';
import useMousetrap from 'react-hook-mousetrap';

interface IState {
  selectedBlock?: BLOCK_COORDS;
}

const Grid: FC = () => {
  const state = useSelector<IReducer, IState>(({ selectedBlock }) => ({
    selectedBlock,
  }));
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  // Only if dispatch changes, usecallback changes
  const create = useCallback(() => {
    dispatch(createGrid());
  }, [dispatch]);
  // Happens on load, create changes -> runs the callback which is dispatch
  useEffect(() => {
    create();
  }, [create]);

  function moveDown() {
    if (state.selectedBlock && state.selectedBlock[0] < 8) {
      dispatch(
        selectBlock([
          (state.selectedBlock[0] + 1) as INDEX,
          state.selectedBlock[1],
        ])
      );
    }
  }

  function moveLeft() {
    if (state.selectedBlock && state.selectedBlock[1] > 0) {
      dispatch(
        selectBlock([
          state.selectedBlock[0] as INDEX,
          (state.selectedBlock[1] - 1) as INDEX,
        ])
      );
    }
  }

  function moveRight() {
    if (state.selectedBlock && state.selectedBlock[1] < 8) {
      dispatch(
        selectBlock([
          state.selectedBlock[0] as INDEX,
          (state.selectedBlock[1] + 1) as INDEX,
        ])
      );
    }
  }

  function moveUp() {
    if (state.selectedBlock && state.selectedBlock[0] > 0) {
      dispatch(
        selectBlock([
          (state.selectedBlock[0] - 1) as INDEX,
          state.selectedBlock[1],
        ])
      );
    }
  }

  useMousetrap('down', moveDown);
  useMousetrap('right', moveRight);
  useMousetrap('left', moveLeft);
  useMousetrap('up', moveUp);

  return (
    <Container data-cy="grid-container">
      {React.Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {React.Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block
                  rowIndex={rowIndex as INDEX}
                  colIndex={colIndex as INDEX}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
