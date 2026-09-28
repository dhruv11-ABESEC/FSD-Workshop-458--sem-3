import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const handleLogin = (e) => {

    e.preventDefault();

    if (username === "" || password === "") {
      alert("Please enter username and password");
      return;
    }

    localStorage.setItem("username", username);

    navigate("/dashboard");
  };


  return (
    <div className="auth-page">

      <div className="auth-left">

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

        <div className="auth-content">

          <div className="auth-logo">
            ◆ MyPortal
          </div>

          <h1>
            Welcome <span>Back!</span>
          </h1>

          <p className="auth-description">
            Login to continue to your personalized dashboard.
          </p>


          <form onSubmit={handleLogin}>

            <label>Username</label>

            <div className="input-box">

              <span>👤</span>

              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

            </div>


            <label>Password</label>

            <div className="input-box">

              <span>🔒</span>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>


            <button className="auth-button" type="submit">
              Login
            </button>

          </form>


          <p className="bottom-text">
            Don't have an account?

            <Link to="/newuser">
              Create an account
            </Link>
          </p>

        </div>

      </div>


      <div className="auth-right">

        <div className="right-content">

          <div className="big-icon">
            ◈
          </div>

          <h2>
            Everything you need,
            <br />
            in one place.
          </h2>

          <p>
            Manage your profile and access your
            dashboard with a simple and modern experience.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;