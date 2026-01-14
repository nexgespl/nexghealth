import { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [tab, setTab] = useState("login");
  const navigate = useNavigate();

  // const handleLogin = () => {
  //   // TEMP LOGIN (Later API + JWT)
  //   localStorage.setItem("doctorToken", "loggedIn");
  //   navigate("/doctor/dashboard");
  // };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/doctor/login",
        {
          emailOrPhone, // ⚠️ backend email expect karta hai
          password,
        }
      );

      // ✅ REAL JWT SAVE
      localStorage.setItem("doctorToken", response.data.token);

      navigate("/doctor/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Doctor Authentication</h2>

        <div className="tabs">
          <button onClick={() => setTab("login")}>Sign In</button>
          <button onClick={() => setTab("signup")}>Sign Up</button>
        </div>

        {tab === "login" && (
          <>
            <input placeholder="Email / Phone Number" />
            <input type="password" placeholder="Password" />
            <p className="link" onClick={() => setTab("forgot")}>
              Forgot Password?
            </p>
            <button onClick={handleLogin}>Login</button>
          </>
        )}

        {tab === "signup" && (
          <>
            <input placeholder="Doctor Name" />
            <input placeholder="Email" />
            <input placeholder="Phone Number" />
            <input type="password" placeholder="Strong Password" />
            <button>Register</button>
          </>
        )}

        {tab === "forgot" && (
          <>
            <input placeholder="Registered Email" />
            <button>Send Reset Link</button>
            <p className="link" onClick={() => setTab("login")}>
              Back to Login
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
