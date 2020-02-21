import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import { ContactsListPage } from './components';

export const App = () => (
  <Provider store={store}>
    <ContactsListPage />
  </Provider>
);
