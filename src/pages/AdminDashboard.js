import { useEffect, useState } from "react";
import { getProducts, saveProducts } from "../utils/productStorage";
import "./Admin.css";

function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const addProduct = () => {
    if (!name || !price) return;

    const newProduct = {
      id: Date.now(),
      name,
      price,
    };

    const updated = [...products, newProduct];
    setProducts(updated);
    saveProducts(updated);

    setName("");
    setPrice("");
  };

  const deleteProduct = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    saveProducts(updated);
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin Dashboard</h2>

      {/* ADD PRODUCT */}
      <div className="admin-form">
        <input
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>

      {/* PRODUCT LIST */}
      <div className="admin-grid">
        {products.map((p) => (
          <div key={p.id} className="admin-card">
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <button onClick={() => deleteProduct(p.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
