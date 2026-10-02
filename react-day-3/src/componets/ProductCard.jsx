import React from "react";

const ProductCard = ({ product, cart, setCart, totalItems, setTotalItems }) => {
  const handleAddToCart = (product) => {
      setCart([...cart, product]);
      setTotalItems(totalItems += 1);
  };

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white p-5 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
      <div>
        <div className="w-full h-52 flex items-center justify-center p-2 mb-4 bg-gray-50 rounded-xl">
          <img
            className="max-h-full max-w-full object-contain"
            src={product.image}
            alt={product.title}
          />
        </div>

        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
          {product.category}
        </span>

        <h2 className="text-lg font-bold text-gray-800 mt-2 line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm mt-2 line-clamp-3">
          {product.description}
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex items-center text-xs text-amber-500 font-medium mt-1">
            ★ {product.rating.rate}{" "}
            <span className="text-gray-400 ml-1">({product.rating.count})</span>
          </div>
        </div>

        <button
          onClick={() => {
            handleAddToCart(product);
          }}
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
