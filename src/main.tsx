import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Tailwind from 'primereact/passthrough/tailwind';
import { App } from './App/App';
import { PrimeReactProvider } from 'primereact/api';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
        <App />
      </PrimeReactProvider>
    </Provider>
  </React.StrictMode>
);
