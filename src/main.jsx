import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css'; // Comment this line to check if CSS is causing issues
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
