import React, { FC } from 'react';

interface IProps {
  colIndex: number;
  rowIndex: number;
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  // Other on the way

  return (
    <div data-cy="block">
      |{rowIndex}
      {colIndex}|
    </div>
  );
};

export default Block;
