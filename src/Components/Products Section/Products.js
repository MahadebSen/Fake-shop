import React, { useEffect, useState } from "react";
import EachProduct from "./EachProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl xl:mx-auto my-10 mx-8 md:mx-10">
      {products.map((item) => (
        <EachProduct className="col" key={item.id} item={item}></EachProduct>
      ))}
    </div>
  );
};

export default Products;
