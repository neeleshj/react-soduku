import React from 'react';
import ReactDOM from 'react-dom';

import { unregister } from './core';
import { GlobalStyles, theme } from './styles';
import { ThemeProvider } from 'styled-components';
import { Content } from './components';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content>
      <div>Hello World</div>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
);

//Service Worker
unregister();
