import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

function ProductCard({ product }) {
  const addToCart = useCartStore((s) => s.addToCart);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        background: "#fff",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", height: "200px", objectFit: "contain" }}
      />

      <h4>{product.title}</h4>
      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <br />

      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
}

export default ProductCard;
