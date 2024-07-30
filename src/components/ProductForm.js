import React, { useState } from 'react';
import { createProduct, updateProduct } from '../services/productService';

function ProductForm({ product, fetchProducts }) {
  const [formData, setFormData] = useState({
    name: product ? product.name : '',
    price: product ? product.price : '',
    image: product ? product.image : null,
    category: product ? product.category : '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('image', formData.image);
    data.append('category', formData.category);

    if (product) {
      await updateProduct(product.id, data);
    } else {
      await createProduct(data);
    }
    fetchProducts();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Product Name"
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Product Price"
      />
      <input
        type="file"
        name="image"
        onChange={handleFileChange}
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProductForm;
