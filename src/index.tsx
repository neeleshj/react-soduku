import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from './core';
import { GlobalStyles, theme } from './styles';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div>Hello World</div>
  </ThemeProvider>,
  document.getElementById('root')
);

//Service Worker
unregister();
