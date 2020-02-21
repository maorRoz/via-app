import React from 'react';
import { Provider } from 'react-redux';
import { ContactCard } from './components';
import { store } from './redux';

export const App = () => (
  <Provider store={store}>
    <ContactCard />
  </Provider>
);
