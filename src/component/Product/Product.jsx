import "./product.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/cart-context";
import TestComponent from "./test-component";

const Product = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  // const navigate = useNavigate();
  // const navigateToPDP = (id, state) => {
  //   navigate(`/product/${id}`, { state });
  // };

  console.log("cart", cart);

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
        <TestComponent />
      </div>
    </Link>
  );
};

export default Product;
