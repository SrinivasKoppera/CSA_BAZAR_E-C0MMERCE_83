import { useContext } from "react";
import CartContext from "../../context/cart-context";

const TestComponent = () => {
  const { cart } = useContext(CartContext);
  console.log("cart in test component", cart);
  return (
    <div>
      <h1>Test Component</h1>
    </div>
  );
};

export default TestComponent;
