import { useState } from "react";
import { getProducts, saveProducts } from "../utils/productStorage";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!name || !price) {
      alert("Fill all fields");
      return;
    }

    const products = getProducts();

    const newProduct = {
      id: Date.now(),
      name,
      price,
    };

    const updatedProducts = [...products, newProduct];
    saveProducts(updatedProducts);

    alert("Product added");
    setName("");
    setPrice("");
  };

  return (
    <div>
      <h2>Add Product</h2>

      <input
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br /><br />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddProduct;
