import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offersNearby } from './mocks/offers-nearby';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorMessage from './components/error-message/error-message';
import { fetchOffersAction, checkAuthAction } from './store/api.actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        offersNearby={offersNearby}
      />
    </Provider>
  </React.StrictMode>
);
