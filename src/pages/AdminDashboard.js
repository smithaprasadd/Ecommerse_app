import { useEffect, useState } from "react";
import { getProducts } from "../api/fakeStore";
import "./Admin.css";

function AdminDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const deleteProduct = (id) => {
    const filtered = products.filter((p) => p.id !== id);
    setProducts(filtered);
  };

  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>

      {products.map((p) => (
        <div key={p.id} className="admin-product">
          <img src={p.image} alt={p.title} />
          <div>
            <h4>{p.title}</h4>
            <p>₹{p.price}</p>
          </div>
          <button onClick={() => deleteProduct(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
