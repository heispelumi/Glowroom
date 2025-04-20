import React from 'react';
import ProductCard from '../components/ProductCard';
import { productList } from '../components/productList';

const Products = () => {
  return (
    <div className="space-y-6 ">
      {/* Header */}
      <div className="bg-[#FFE4E1] p-6 rounded-2xl shadow">
        <h1 className="text-3xl font-bold text-[#B3446C]">🛍️ Beauty Products</h1>
        <p className="text-[#B3446C] mt-1 text-sm">Explore your fabulous product lineup and manage your inventory in style 💄</p>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {productList.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
