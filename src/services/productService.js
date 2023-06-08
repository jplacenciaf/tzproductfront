import axios from 'axios';

// const API_BASE_URL = 'http://localhost:3000';
const API_BASE_URL = 'https://tzproductback.herokuapp.com';

// Obtener todos los productos
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw error;
  }
};

// Obtener un producto por su ID
export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener el producto con ID ${productId}:`, error);
    throw error;
  }
};

export const getProductImageById = async (productId) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    return response.data.image;
  } catch (error) {
    console.error(`Error al obtener el producto con ID ${productId}:`, error);
    throw error;
  }
};

// Crear un nuevo producto
export const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/products`, productData);
    return response.data;
  } catch (error) {
    console.error('Error al crear el producto:', error);
    throw error;
  }
};

// Actualizar un producto existente
export const updateProduct = async (productId, productData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/products/${productId}`, productData);
    return response.data;
  } catch (error) {
    console.error(`Error al actualizar el producto con ID ${productId}:`, error);
    throw error;
  }
};
