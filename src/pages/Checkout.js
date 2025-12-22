import "./Checkout.css";

function Checkout() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <h2>Checkout</h2>

        <form onSubmit={handleSubmit}>
          <div className="checkout-group">
            <label>Name</label>
            <input type="text" required />
          </div>

          <div className="checkout-group">
            <label>Email</label>
            <input type="email" required />
          </div>

          <div className="checkout-group">
            <label>Phone</label>
            <input type="tel" required />
          </div>

          <div className="checkout-group">
            <label>Address</label>
            <textarea required />
          </div>

          <button className="place-order-btn" type="submit">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;

