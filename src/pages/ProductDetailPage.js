import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, getProductImageById } from '../services/productService';
import { Button, Card, Image } from 'react-bootstrap';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [imageURL, setImageURL] = useState('');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        const imgProduct = await getProductImageById(Math.floor(Math.random() * (20)) + 1);
        setProduct(productData);
        setImageURL(imgProduct);
      } catch (error) {
        console.error(`Error al obtener el producto con ID ${id}:`, error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
        <br/>
      <h1>Detalles del producto</h1>
      <Button variant="primary" onClick={handleBack}>
        Volver
      </Button>
        <br/><br/>
      <Card>
        <Card.Body>
          <Card.Title>Nombre: {product.name}</Card.Title>
          <Card.Text>Descripción: {product.description}</Card.Text>
          <Card.Text>Precio: {product.price}</Card.Text>
          <Image width={300} src={imageURL} alt="Product" fluid />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetailPage;
