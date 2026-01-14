// import { useState } from "react";

// function AuthModal({ closeModal }) {
//   const [tab, setTab] = useState("login");

//   return (
//     <div style={styles.overlay}>
//       <div style={styles.modal}>
//         <span style={styles.close} onClick={closeModal}>
//           ✖
//         </span>

//         <div style={styles.tabs}>
//           <button onClick={() => setTab("login")}>Sign In</button>
//           <button onClick={() => setTab("signup")}>Sign Up</button>
//           <button onClick={() => setTab("forgot")}>Forget</button>
//         </div>

//         {tab === "login" && <Login />}
//         {tab === "signup" && <Signup />}
//         {tab === "forgot" && <Forgot />}
//       </div>
//     </div>
//   );
// }

// const Login = () => (
//   <>
//     <h3>Sign In</h3>
//     <input placeholder="Email" />
//     <input type="password" placeholder="Password" />
//     <button>Login</button>
//   </>
// );

// const Signup = () => (
//   <>
//     <h3>Sign Up</h3>
//     <input placeholder="Name" />
//     <input placeholder="Email" />
//     <input type="password" placeholder="Password" />
//     <button>Register</button>
//   </>
// );

// const Forgot = () => (
//   <>
//     <h3>Forget Password</h3>
//     <input placeholder="Email" />
//     <button>Send Link</button>
//   </>
// );

// const styles = {
//   overlay: {
//     position: "fixed",
//     inset: 0,
//     background: "rgba(0,0,0,0.5)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     zIndex: 1000,
//   },
//   modal: {
//     background: "#fff",
//     padding: 20,
//     width: 350,
//     position: "relative",
//   },
//   close: {
//     position: "absolute",
//     top: 10,
//     right: 10,
//     cursor: "pointer",
//   },
//   tabs: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginBottom: 15,
//   },
// };

// export default AuthModal;

// ********************************************************************

// import { useState } from "react";
// import "./AuthModal.css";

// function AuthModal({ closeModal }) {
//   const [tab, setTab] = useState("login");

//   return (
//     <div className="auth-overlay">
//       <div className="auth-card">
//         <span className="close-btn" onClick={closeModal}>
//           ✖
//         </span>

//         <h2 className="title">Login Form</h2>

//         {/* Tabs */}
//         <div className="tab-buttons">
//           <button
//             className={tab === "login" ? "active" : ""}
//             onClick={() => setTab("login")}
//           >
//             Login
//           </button>
//           <button
//             className={tab === "signup" ? "active" : ""}
//             onClick={() => setTab("signup")}
//           >
//             Signup
//           </button>
//         </div>

//         {tab === "login" && <Login setTab={setTab} />}
//         {tab === "signup" && <Signup setTab={setTab} />}
//         {tab === "forgot" && <Forgot setTab={setTab} />}
//       </div>
//     </div>
//   );
// }

// const Login = ({ setTab }) => (
//   <>
//     <input type="text" placeholder="Email Address" />
//     <input type="password" placeholder="Password" />

//     <p className="forgot" onClick={() => setTab("forgot")}>
//       Forgot password?
//     </p>

//     <button className="main-btn">Login</button>

//     <p className="switch">
//       Not a member? <span onClick={() => setTab("signup")}>Signup now</span>
//     </p>
//   </>
// );

// const Signup = ({ setTab }) => (
//   <>
//     <input type="text" placeholder="Full Name" />
//     <input type="email" placeholder="Email Address" />
//     <input type="password" placeholder="Password" />

//     <button className="main-btn">Signup</button>

//     <p className="switch">
//       Already have an account?{" "}
//       <span onClick={() => setTab("login")}>Login</span>
//     </p>
//   </>
// );

// const Forgot = ({ setTab }) => (
//   <>
//     <input type="email" placeholder="Enter your email" />
//     <button className="main-btn">Send Reset Link</button>

//     <p className="switch">
//       Back to <span onClick={() => setTab("login")}>Login</span>
//     </p>
//   </>
// );

// export default AuthModal;

// ********************************************************************************

import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import "./AuthModal.css";

function AuthModal({ defaultTab = "login" }) {
  const [tab, setTab] = useState(defaultTab);
  const navigate = useNavigate();

  const changeTab = (newTab) => {
    setTab(newTab);

    if (newTab === "login") navigate("/login");
    if (newTab === "signup") navigate("/signup");
    if (newTab === "forgot") navigate("/forgot-password");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="title">
          {tab === "login"
            ? "Provider Login"
            : tab === "signup"
            ? "Provider Signup"
            : "Forgot Password"}
        </h2>

        {/* Tabs */}
        {(tab === "login" || tab === "signup") && (
          <div className="tab-buttons">
            <button
              className={tab === "login" ? "active" : ""}
              onClick={() => changeTab("login")}
            >
              Login
            </button>
            <button
              className={tab === "signup" ? "active" : ""}
              onClick={() => changeTab("signup")}
            >
              Signup
            </button>
          </div>
        )}

        {tab === "login" && <Login changeTab={changeTab} />}
        {tab === "signup" && <Signup changeTab={changeTab} />}
        {tab === "forgot" && <Forgot changeTab={changeTab} />}
      </div>
    </div>
  );
}

/* ================= LOGIN ================= */
const Login = ({ changeTab }) => {
  const navigate = useNavigate();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/api/doctor/login",
  //       {
  //         emailOrPhone,
  //         password,
  //       }
  //     );

  //     // ✅ YAHI LINE TUM POOCH RAHE THE
  //     localStorage.setItem("doctorToken", response.data.token);

  //     navigate("/doctor/dashboard");
  //   } catch (err) {
  //     setError("Invalid login credentials");
  //   }
  // };

  const handleLogin = async () => {
    console.log("LOGIN DATA:", emailOrPhone, password);

    if (!emailOrPhone || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/doctor/login",
        {
          emailOrPhone,
          password,
        }
      );

      localStorage.setItem("doctorToken", response.data.token);
      navigate("/doctor/dashboard");
    } catch (err) {
      console.error(err.response?.data);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Email or Phone"
        value={emailOrPhone}
        onChange={(e) => setEmailOrPhone(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button className="main-btn" onClick={handleLogin}>
        Login
      </button>

      <p className="forgot" onClick={() => changeTab("forgot")}>
        Forgot password?
      </p>

      <p className="switch">
        Not a member?{" "}
        <span onClick={() => changeTab("signup")}>Signup now</span>
      </p>
    </>
  );
};

// const handleLogin = () => {
//   localStorage.setItem("doctorToken", "loggedIn");
//   navigate("/doctor/dashboard");
// };

//   return (
//     <>
//       <input type="text" placeholder="Email Address or Phone" required />
//       <input type="password" placeholder="Password" required />

//       <p className="forgot" onClick={() => changeTab("forgot")}>
//         Forgot password?
//       </p>

//       <button className="main-btn" onClick={handleLogin}>
//         Login
//       </button>

//       <p className="switch">
//         Not a member?{" "}
//         <span onClick={() => changeTab("signup")}>Signup now</span>
//       </p>
//     </>
//   );
// };

/* ================= SIGNUP ================= */
// const Signup = ({ changeTab }) => {
//   const navigate = useNavigate();

//   const handleSignup = () => {
//     // 🔐 TEMP AUTH
//     localStorage.setItem("doctorToken", "loggedIn");

//     // ✅ Redirect to dashboard
//     navigate("/doctor/dashboard");
//   };

//   return (
//     <>
//       <input type="text" placeholder="Full Name" required />
//       <input type="email" placeholder="Email Address" required />
//       <input type="text" placeholder="Phone Number" required />
//       <input type="password" placeholder="Password" required />

//       <button className="main-btn" onClick={handleSignup}>
//         Signup
//       </button>

//       <p className="switch">
//         Already have an account?{" "}
//         <span onClick={() => changeTab("login")}>Login</span>
//       </p>
//     </>
//   );
// };

/* ================= SIGNUP WITH STRONG PASSWORD ================= */

// const Signup = ({ changeTab }) => {
//   const navigate = useNavigate();
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const strongPasswordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   const handleSignup = () => {
//     if (!strongPasswordRegex.test(password)) {
//       setError(
//         "Password must be 8+ chars with Uppercase, Lowercase, Number & Special character"
//       );
//       return;
//     }

//     // ✅ TEMP AUTH
//     localStorage.setItem("doctorToken", "loggedIn");
//     navigate("/doctor/dashboard");
//   };

//   return (
//     <>
//       <input type="text" placeholder="Full Name" required />
//       <input type="email" placeholder="Email Address" required />
//       <input type="text" placeholder="Phone Number" required />

//       <input
//         type="password"
//         placeholder="Strong Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />

//       {error && <p style={{ color: "red", fontSize: "13px" }}>{error}</p>}

//       <button className="main-btn" onClick={handleSignup}>
//         Signup
//       </button>

//       <p className="switch">
//         Already have an account?{" "}
//         <span onClick={() => changeTab("login")}>Login</span>
//       </p>
//     </>
//   );
// };

const Signup = ({ changeTab }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  const handleSignup = async () => {
    if (!name || !email || !phone || !password) {
      setError("All fields required");
      return;
    }

    if (!strongPasswordRegex.test(password)) {
      setError(
        "Password must be 8+ chars with Uppercase, Lowercase, Number & Special char"
      );
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/doctor/signup",
        {
          name,
          email,
          phone,
          password,
        }
      );

      localStorage.setItem("doctorToken", response.data.token);
      navigate("/doctor/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="password"
        placeholder="Strong Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button className="main-btn" onClick={handleSignup}>
        Signup
      </button>

      <p className="switch">
        Already have an account?{" "}
        <span onClick={() => changeTab("login")}>Login</span>
      </p>
    </>
  );
};

/* ================= FORGOT ================= */
const Forgot = ({ changeTab }) => {
  return (
    <>
      <input type="email" placeholder="Enter your email" required />
      <button className="main-btn">Send Reset Link</button>

      <p className="switch">
        Back to <span onClick={() => changeTab("login")}>Login</span>
      </p>
    </>
  );
};

export default AuthModal;
