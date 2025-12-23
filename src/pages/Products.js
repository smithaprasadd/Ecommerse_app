import { useEffect, useState } from "react";
import { getProducts, saveProducts } from "../utils/productStorage";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const deleteProduct = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    saveProducts(updated);
  };

  return (
    <div>
      <h2>Products</h2>

      {products.length === 0 && <p>No products</p>}

      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <button onClick={() => deleteProduct(p.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Products;
