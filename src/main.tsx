import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/global.ts';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext.tsx';
import { FavoritesProvider } from './contexts/FavoritesContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </ShoppingCartProvider>
  </React.StrictMode>,
);
