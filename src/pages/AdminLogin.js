import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import "./Admin.css";

function AdminLogin() {
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "admin@shop.com" && password === "admin123") {
      login({ email, role: "admin" });
      navigate("/admin");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-card">
        <h2>Admin Login</h2>

        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Admin Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
