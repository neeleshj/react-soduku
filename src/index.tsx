import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { unregister, configureStore } from 'core';
import { GlobalStyles, theme } from 'styles';
import { ThemeProvider } from 'styled-components';
import { Content, Title, Card, Grid } from 'components';

const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <Content data-cy="content">
        <Title data-cy="title"> Soduku </Title>
        <Card data-cy="card">
          <Grid />
        </Card>
      </Content>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

//Service Worker
unregister();
