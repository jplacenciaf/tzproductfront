import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllProducts } from '../services/productService';
import { Table, Button } from 'react-bootstrap';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
        const productsData = await getAllProducts();
        setProducts(productsData);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleNewProductClick = () => {
    navigate('/product/new');
  };

  return (
    <div>
      <br/>
      <h1>Listado de productos</h1>
      <br/>
      <Button variant="primary" onClick={handleNewProductClick}>
        Nuevo Producto
      </Button>
      <br/><br/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`/product/${product.id}`} className="btn btn-primary mr-2">
                  Ver detalle 
                </Link>
                &nbsp;
                <Link to={`/product/${product.id}/edit`} className="btn btn-secondary">
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductListPage;
