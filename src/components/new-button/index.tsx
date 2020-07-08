import React, { FC, useCallback, Dispatch } from 'react';
import { Button } from 'components';
import { useDispatch } from 'react-redux';
import { Action } from 'redux';
import { createGrid } from 'reducers';

const NewButton: FC = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const createNewGrid = useCallback(() => {
    if (window.confirm('New Game?')) dispatch(createGrid());
  }, [dispatch]);

  return <Button onClick={createNewGrid}>New Game</Button>;
};

export default NewButton;
