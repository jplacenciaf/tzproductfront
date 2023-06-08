import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import EditProductPage from './pages/EditProductPage';
import AddProductPage from './pages/AddProductPage';

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route exact path="/" element={<ProductListPage/>} />
          <Route exact path="/product/:id" element={<ProductDetailPage/>} />
          <Route exact path="/product/:id/edit" element={<EditProductPage/>} />
          <Route exact path="/product/new" element={<AddProductPage/>} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
