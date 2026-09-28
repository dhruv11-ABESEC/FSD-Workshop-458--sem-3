import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NewUser() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const handleRegister = (e) => {

    e.preventDefault();

    if (
      username === "" ||
      email === "" ||
      password === ""
    ) {
      alert("Please fill all the details");
      return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);

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
            Create <span>Account</span>
          </h1>

          <p className="auth-description">
            Enter your details to create your new account.
          </p>


          <form onSubmit={handleRegister}>

            <label>Username</label>

            <div className="input-box">

              <span>👤</span>

              <input
                type="text"
                placeholder="Choose a username"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
              />

            </div>


            <label>Email</label>

            <div className="input-box">

              <span>✉️</span>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>


            <label>Password</label>

            <div className="input-box">

              <span>🔒</span>

              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

            </div>


            <button className="auth-button" type="submit">
              Create Account
            </button>

          </form>


          <p className="bottom-text">

            Already have an account?

            <Link to="/login">
              Login here
            </Link>

          </p>

        </div>

      </div>


      <div className="auth-right register-right">

        <div className="right-content">

          <div className="big-icon">
            ✨
          </div>

          <h2>
            Start your journey
            <br />
            with us.
          </h2>

          <p>
            Create your account and get access
            to your personal dashboard.
          </p>

        </div>

      </div>

    </div>
  );
}

export default NewUser;