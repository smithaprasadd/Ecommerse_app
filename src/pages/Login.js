import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();             
  const login = useAuthStore((state) => state.login); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!validUser) {
      alert("Invalid credentials or user not registered");
      return;
    }

    login({ name: validUser.name, email: validUser.email });
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>

   
        <form onSubmit={handleSubmit}>
          <div className="auth-group">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>

          <div className="auth-group">
            <label>Password</label>
            <input type="password" name="password" required />
          </div>

          <button className="auth-btn" type="submit">
            Login
          </button>
        </form>

        <div className="auth-link">
          New user? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
