import './App.css';
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ProductPage from './pages/ProductPage';
import AddProductPage from './pages/AddProductPage';
import HomePage from './pages/HomePage';


function App() {
  return (
    <>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/addproduct'>Add Product</Link></li>
    </ul>

    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/products' element={<ProductPage/>} />
        <Route path='/addproduct' element={<AddProductPage/>} />
    </Routes>

    </>
    );
}

export default App;
