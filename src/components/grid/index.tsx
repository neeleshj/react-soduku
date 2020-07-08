import React, { FC, Dispatch, useCallback, useEffect } from 'react';
import { Container, Row } from './styles/index';
import Block from './block';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { createGrid, IReducer, selectBlock, fillBlock } from 'reducers';
import { INDEX, BLOCK_COORDS, NUMBERS, N, GRID } from 'typings';
import useMousetrap from 'react-hook-mousetrap';
import { solveGrid } from 'utils';

interface IState {
  selectedBlock?: BLOCK_COORDS;
  selectedValue: N;
  solvedGrid?: GRID;
}

const Grid: FC = () => {
  const state = useSelector<IReducer, IState>(
    ({ selectedBlock, solvedGrid, workingGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
      solvedGrid,
    })
  );

  const dispatch = useDispatch<Dispatch<AnyAction>>();

  // Only if dispatch changes, usecallback changes
  const create = useCallback(() => {
    dispatch(createGrid());
  }, [dispatch]);

  // Happens on load, create changes -> runs the callback which is dispatch
  useEffect(() => {
    if (!state.solvedGrid) create();
  }, [create, state.solvedGrid]);

  const fill = useCallback(
    (n: NUMBERS) => {
      if (state.selectedBlock && state.selectedValue === 0) {
        dispatch(fillBlock(n, state.selectedBlock));
      }
    },
    [dispatch, state.selectedBlock, state.selectedValue]
  );

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

  useMousetrap('1', () => fill(1));
  useMousetrap('2', () => fill(2));
  useMousetrap('3', () => fill(3));
  useMousetrap('4', () => fill(4));
  useMousetrap('5', () => fill(5));
  useMousetrap('6', () => fill(6));
  useMousetrap('7', () => fill(7));
  useMousetrap('8', () => fill(8));
  useMousetrap('9', () => fill(9));

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
