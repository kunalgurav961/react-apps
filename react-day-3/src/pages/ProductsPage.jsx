import React, { useState } from "react";
import ProductCard from "../componets/ProductCard";

const ProductsPage = (props) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  console.log(cart);
  return (
    <div className="min-h-full overflow-auto p-3">
      <h1 className="text-center text-7xl pb-5">All Products</h1>
      <span className="w-15 h-15 bg-amber-200 rounded-full text-black absolute top-5 right-5 flex justify-center items-center text-4xl">
        {totalItems}
      </span>
      <div className="border h-full p-5 grid grid-cols-4 gap-5 grid-rows-auto ">
        {props.products.map((prod, index) => {
          return (
            <ProductCard
              totalItems={totalItems}
              setTotalItems={setTotalItems}
              cart={cart}
              setCart={setCart}
              product={prod}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
