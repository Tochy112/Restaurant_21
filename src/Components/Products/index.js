import React from 'react';
import ReactDOM from 'react-dom/client';
import { RestDesc } from './components/About/RestDesc';
import './index.css';
import Product from './Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Product/>
  </React.StrictMode>
);

