import { useState, useEffect } from "react";
import Product from "../Product/Product";
import "./Product.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    async function fetchDataAsync() {
      await fetchData();
    }
    fetchDataAsync();
  }, [products]);

  return (
    <div>
      <h1>Products Page</h1>
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
