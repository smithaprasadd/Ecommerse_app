import { useEffect, useState } from "react";
import { getProducts } from "../api/fakeStore";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    getProducts().then((data) => {
      // remove admin-deleted products
      const deleted = JSON.parse(localStorage.getItem("deletedProducts")) || [];
      const visibleProducts = data.filter(
        (p) => !deleted.includes(p.id)
      );

      setProducts(visibleProducts);
      setFiltered(visibleProducts);
    });
  }, []);

  useEffect(() => {
    let temp = [...products];

    // 🔍 SEARCH FILTER
    if (search) {
      temp = temp.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // 💰 PRICE FILTER
    if (minPrice) {
      temp = temp.filter((p) => p.price >= Number(minPrice));
    }

    if (maxPrice) {
      temp = temp.filter((p) => p.price <= Number(maxPrice));
    }

    setFiltered(temp);
  }, [search, minPrice, maxPrice, products]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      {/* 🔍 FILTER BAR */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      {/* PRODUCT GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {filtered.length === 0 ? (
          <p>No products found</p>
        ) : (
          filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
