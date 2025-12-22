import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { useThemeStore } from "../store/themeStore";
import{ useAuthStore} from "../store/authStore";
function Navbar() {
  const cart = useCartStore((state) => state.cart);
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const isAuth=useAuthStore((state)=>state.isAuth);
  const logout=useAuthStore((state)=>state.logout);
  return (
    <nav
      style={{
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme === "dark" ? "#222" : "#f5f5f5",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      {/* LOGO */}
      <h2>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          E-Commerce
        </Link>
      </h2>

      {/* NAV LINKS */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Home
        </Link>

        <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
          Cart ({cart.length})
        </Link>

        <Link
          to="/checkout"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Checkout
        </Link>
        
       {/* AUTH LINKS */}
        {!isAuth ? (
          <>
            <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
              Login
            </Link>

            <Link
              to="/register"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={logout}
            style={{
              cursor: "pointer",
              background: "transparent",
              border: "1px solid",
              padding: "5px 10px",
            }}
          >
            Logout
          </button>
        )}

        {/* THEME TOGGLE */}
        <button onClick={toggleTheme} style={{ cursor: "pointer" }}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
