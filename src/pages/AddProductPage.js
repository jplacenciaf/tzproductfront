import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { createProduct } from '../services/productService';

const AddProductPage = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Llamar a la función de creación del producto en el servicio
      await createProduct(productData);
      // Redirigir a la página de lista de productos después de crear el producto
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Nuevo Producto</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Descripción:</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={productData.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Precio:</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Agregar Producto</Button>
      </Form>
    </div>
  );
};

export default AddProductPage;
