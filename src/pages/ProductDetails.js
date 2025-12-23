import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../api/fakeStore";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      // 1️⃣ Check admin-added products (localStorage)
      const adminProducts =
        JSON.parse(localStorage.getItem("products")) || [];

      const adminProduct = adminProducts.find(
        (p) => String(p.id) === id
      );

      if (adminProduct) {
        setProduct(adminProduct);
        return;
      }

      // 2️⃣ Else fetch from FakeStore API
      const apiProduct = await getProductById(id);
      setProduct(apiProduct);
    };

    loadProduct();
  }, [id]);

  if (!product) return <p style={{ padding: "40px" }}>Loading...</p>;

  return (
    <div style={{ padding: "40px" }}>
      <h2>{product.name || product.title}</h2>
      <p style={{ fontSize: "18px" }}>₹{product.price}</p>

      {/* FakeStore has description, admin product may not */}
      {product.description && (
        <p style={{ marginTop: "20px" }}>{product.description}</p>
      )}
    </div>
  );
}

export default ProductDetails;
