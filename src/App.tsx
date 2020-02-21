import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import { Body } from './App.styled';
import { ContactsList, Header } from './components';

export const App = () => (
  <Provider store={store}>
    <Header />
    <Body>
      <ContactsList />
    </Body>
  </Provider>
);
