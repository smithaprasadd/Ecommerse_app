import { useEffect, useState } from "react";
import { getProducts as getFakeProducts } from "../api/fakeStore";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      // 1️⃣ Get FakeStore products
      const fakeProducts = await getFakeProducts();

      // 2️⃣ Get Admin-added products from localStorage
      const adminProducts =
        JSON.parse(localStorage.getItem("products")) || [];

      // 3️⃣ Merge both
      const mergedProducts = [...adminProducts, ...fakeProducts];

      setProducts(mergedProducts);
    };

    loadProducts();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ marginBottom: "20px" }}>All Products</h2>

      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

