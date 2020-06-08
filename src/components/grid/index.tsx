import React, { FC } from 'react';
import { Container, Row } from './styles/index';
import Block from './block';
import { createFullGrid } from 'utils';

const Grid: FC = () => {
  const grid = createFullGrid();
  // Other on the way
  return (
    <Container data-cy="grid-container">
      {React.Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {React.Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block rowIndex={rowIndex} colIndex={colIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
