import React, { FC, Dispatch, useCallback, useEffect } from 'react';
import { Container, Row } from './styles/index';
import Block from './block';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { createGrid } from 'reducers';
import { INDEX } from 'typings';

const Grid: FC = () => {
  // const grid = createFullGrid();
  // Other on the way

  const dispatch = useDispatch<Dispatch<AnyAction>>();
  // Only if dispatch changes, usecallback changes
  const create = useCallback(() => {
    dispatch(createGrid());
  }, [dispatch]);

  // Happens on load, create changes -> runs the callback which is dispatch
  useEffect(() => {
    create();
  }, [create]);

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
