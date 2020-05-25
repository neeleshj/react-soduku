import React from 'react';
import ReactDOM from 'react-dom';

import { unregister } from './core';
import { GlobalStyles, theme } from './styles';
import { ThemeProvider } from 'styled-components';
import { Content, Title } from './components';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content data-cy="content">
      <Title data-cy="title"> Soduku </Title>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
);

//Service Worker
unregister();
