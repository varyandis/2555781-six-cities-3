import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Settings } from './const';
import { offers } from './mocks/offers';
import { offersNearby } from './mocks/offers-nearby';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersCount = {Settings.offersCount}
      offers={offers}
      offersNearby={offersNearby}
    />
  </React.StrictMode>
);
