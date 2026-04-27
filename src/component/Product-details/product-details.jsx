import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./product-details.css";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  // const params = useParams();
  // console.log("params", params);
  const { identifier } = useParams();
  // const location = useLocation();
  // console.log("location", location.search);

  const getProductData = async () => {
    // fetch data from API using the identifier
    const response = await fetch(
      `https://fakestoreapi.com/products/${identifier}`,
    );
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    const fetchDataAsync = async () => {
      await getProductData();
    };
    fetchDataAsync();
  }, [identifier]);

  console.log("product", product);

  return (
    <div className="product-details-container">
      <div className="details-image-container">
        <img src={product?.image} alt={product?.title} />
      </div>

      <div className="details-text-container">
        <h1>{product?.title}</h1>
        <p>{product?.description}</p>
        <p>Price: {product?.price}</p>
        <h4>Category: {product?.category}</h4>
        <div>
          <p>Rating: {product?.rating?.rate}</p> Out of {product?.rating?.count}{" "}
          reviews
        </div>
        <div className="button-container">
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
