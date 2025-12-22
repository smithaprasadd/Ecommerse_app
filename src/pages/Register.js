import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Register() {
  const navigate = useNavigate(); // ✅ defined

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      alert("User already registered. Please login.");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>

        {/* ✅ handleSubmit is USED */}
        <form onSubmit={handleSubmit}>
          <div className="auth-group">
            <label>Name</label>
            <input type="text" name="name" required />
          </div>

          <div className="auth-group">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>

          <div className="auth-group">
            <label>Password</label>
            <input type="password" name="password" required />
          </div>

          <button className="auth-btn" type="submit">
            Register
          </button>
        </form>

        <div className="auth-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
