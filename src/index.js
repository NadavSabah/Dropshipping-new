import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './global.scss';
import App from './App';
import CollectionPage from './Pages/CollectionsPage';
import Collection from './Components/Collection'
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import Header from './Components/Header'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="products/:productHandle" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="collections" element={<CollectionPage />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>index route shares the path of the parent</p>
                </main>
              }
            />
            <Route path=":collectionHandle" element={<Collection />} />
          </Route>

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode >

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
