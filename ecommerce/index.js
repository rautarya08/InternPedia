// // src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './App.css';
// import { CartProvider } from './context/CartContext'; // if using Context API
import { Provider } from 'react-redux'; // if using Redux
import store from './store/store'; // if using Redux

import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import App from './App';
import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CartProvider>
    <App />
  </CartProvider>
);

// root.render(
//   <React.StrictMode>
//     {/* Using Context API */}
//     {/* <CartProvider>
//       <App />
//     </CartProvider> */}
    
//     {/* Using Redux */}
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// // 