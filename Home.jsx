import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo">
          <span>◆</span> MyPortal
        </div>

        <div className="nav-links">
          <Link to="/login">Login</Link>

          <Link to="/newuser" className="nav-button">
            Get Started
          </Link>
        </div>

      </nav>


      {/* Hero Section */}
      <section className="hero">

        <div className="hero-text">

          <div className="small-tag">
            ✨ Welcome to MyPortal
          </div>

          <h1>
            Your Digital
            <span> Workspace</span>
          </h1>

          <p>
            A simple and secure platform to manage your
            account, access your dashboard and keep your
            information organized.
          </p>

          <div className="hero-buttons">

            <Link to="/login">
              <button className="primary-button">
                Login →
              </button>
            </Link>

            <Link to="/newuser">
              <button className="outline-button">
                Create Account
              </button>
            </Link>

          </div>

        </div>


        {/* Right side card */}
        <div className="hero-card">

          <div className="floating-icon">
            ◈
          </div>

          <h2>Welcome Back!</h2>

          <p>
            Access your personalized dashboard
            in just one click.
          </p>

          <div className="mini-card">
            <div className="avatar">
              👤
            </div>

            <div>
              <strong>Personal Dashboard</strong>
              <small>Everything in one place</small>
            </div>
          </div>

          <div className="mini-card">
            <div className="avatar">
              ✓
            </div>

            <div>
              <strong>Easy to Use</strong>
              <small>Simple & clean interface</small>
            </div>
          </div>

        </div>

      </section>


      {/* Features */}
      <section className="features">

        <div className="feature-card">
          <div className="feature-icon">🔐</div>
          <h3>Secure Access</h3>
          <p>
            Login securely and access your personal
            dashboard.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Fast & Simple</h3>
          <p>
            A clean interface designed for a smooth
            experience.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Dashboard</h3>
          <p>
            View your basic information from one place.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Home;