import React from 'react';

const ProductCard = ({ product, showRating, compact }) => {
  return (
    <li
      className={`flex items-center gap-4 p-3 rounded-lg shadow-md transition hover:scale-105 hover:bg-pink-600 duration-200 ${
        compact ? 'text-sm' : 'text-base'
      }`}
      style={{ backgroundColor: '#B3446C' }}
    >
      <img
        src={product.image}
        alt={product.name}
        className={`rounded-lg object-cover ${compact ? 'w-12 h-12' : 'w-16 h-16'}`}
      />
      <div className="flex flex-col">
        <span className="font-semibold text-white">{product.name}</span>
        {showRating && (
          <span className="text-yellow-300 font-medium">
            ★ {product.rating}
          </span>
        )}
        <span className="text-pink-200 font-semibold">${product.price}</span>
      </div>
    </li>
  );
};

export default ProductCard;
