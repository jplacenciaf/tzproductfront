import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, updateProduct } from '../services/productService';
import { Form, Button } from 'react-bootstrap';

const EditProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({ name: '', description: '', price: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        setProduct(productData);
        setFormData({ name: productData.name, description: productData.description, price: productData.price });
      } catch (error) {
        console.error(`Error al obtener el producto con ID ${id}:`, error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateProduct(id, formData);
      console.log('Producto actualizado exitosamente');
      navigate('/');
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  if (!product) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
        <br/>
      <h1>Editar producto</h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleFormChange} />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Descripción:</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={formData.description}
            onChange={handleFormChange}
          />
        </Form.Group>
        <Form.Group controlId="formPrice">
          <Form.Label>Precio:</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={formData.price}
            onChange={handleFormChange}
          />
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">
          Guardar cambios
        </Button>
      </Form>
    </div>
  );
};

export default EditProductPage;
