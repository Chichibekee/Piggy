import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-10">
      
      <h1 className="text-3xl font-bold mb-8">Shop Products</h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div
            key={product.id}
         
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />

           
            <p className="text-sm text-gray-600 mb-2">
              <strong>Category:</strong> {product.category}
            </p>

            <p className="text-base font-medium">{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
