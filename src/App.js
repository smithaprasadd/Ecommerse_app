import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import { useAuthStore } from "./store/authStore";
function AdminRoute({ children }) {
  const user = useAuthStore((state) => state.user);

  // allow only admin
  return user?.role === "admin" ? children : <AdminLogin />;
}
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* CONTENT WRAPPER (IMPORTANT) */}
      <div style={{ marginTop: "20px", position: "relative", zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/admin-login" element={<AdminLogin />} />

<Route
  path="/admin"
  element={
    <AdminRoute>
      <AdminDashboard />
    </AdminRoute>
  }
/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
