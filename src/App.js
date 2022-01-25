import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDescription from './components/ProductDescription';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
      <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/:id" element={<ProductDescription/>}> </Route>
        <Route path="/cart" element={<Cart/>}> </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
