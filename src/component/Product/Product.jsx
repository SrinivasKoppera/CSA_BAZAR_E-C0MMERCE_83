import "./product.css";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  // const navigate = useNavigate();
  // const navigateToPDP = (id, state) => {
  //   navigate(`/product/${id}`, { state });
  // };

  return (
    <Link
      to={`/product/${product.id}?title=${product.title}&description=${product.description}&price=${product.price}&image=${product.image}`}
      state={{ product: product }}
      className="product"
      // onClick={() => navigateToPDP(product.id, { product: product })}
    >
      <div className="img-container">
        <img src={product.image} alt={product.title} className="product-img" />
      </div>

      <div className="text-container">
        <h2>{product.title}</h2>
        <p className="description">{product.description}</p>
        <p>Price: {product.price}</p>
        <button>Add to Cart</button>
      </div>
    </Link>
  );
};

export default Product;
