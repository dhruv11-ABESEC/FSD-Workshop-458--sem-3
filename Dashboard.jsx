import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();


  useEffect(() => {

    const savedUsername =
      localStorage.getItem("username");

    const savedEmail =
      localStorage.getItem("email");

    if (!savedUsername) {

      navigate("/login");

    } else {

      setUsername(savedUsername);
      setEmail(savedEmail || "Not available");

    }

  }, [navigate]);


  const handleLogout = () => {

    localStorage.removeItem("username");
    localStorage.removeItem("email");

    navigate("/login");

  };


  return (
    <div className="dashboard-page">

      {/* Sidebar */}

      <aside className="sidebar">

        <div className="dashboard-logo">
          ◆ MyPortal
        </div>


        <div className="side-menu">

          <div className="menu-item active">
            🏠 Dashboard
          </div>

          <div className="menu-item">
            👤 Profile
          </div>

          <div className="menu-item">
            ⚙️ Settings
          </div>

        </div>


        <button
          className="logout-button"
          onClick={handleLogout}
        >
          🚪 Logout
        </button>

      </aside>


      {/* Main Content */}

      <main className="dashboard-main">

        <div className="dashboard-header">

          <div>
            <p className="welcome-small">
              Welcome back
            </p>

            <h1>
              {username}! 👋
            </h1>
          </div>


          <div className="profile-circle">
            {username.charAt(0).toUpperCase()}
          </div>

        </div>


        {/* Welcome Card */}

        <div className="welcome-card">

          <div>

            <p>YOUR DASHBOARD</p>

            <h2>
              Welcome to your
              <br />
              personal space.
            </h2>

            <span>
              Everything you need is right here.
            </span>

          </div>

          <div className="welcome-symbol">
            ✨
          </div>

        </div>


        {/* Cards */}

        <div className="dashboard-cards">

          <div className="dashboard-card">

            <div className="card-icon blue">
              👤
            </div>

            <div>
              <p>Username</p>
              <h3>{username}</h3>
            </div>

          </div>


          <div className="dashboard-card">

            <div className="card-icon purple">
              ✉️
            </div>

            <div>
              <p>Email Address</p>
              <h3>{email}</h3>
            </div>

          </div>


          <div className="dashboard-card">

            <div className="card-icon green">
              ✓
            </div>

            <div>
              <p>Account Status</p>
              <h3>Active</h3>
            </div>

          </div>

        </div>


        {/* Information */}

        <div className="dashboard-section">

          <h2>Account Overview</h2>

          <p>
            Your account is successfully created and
            ready to use.
          </p>

          <div className="progress-area">

            <div className="progress-text">
              <span>Profile completed</span>
              <strong>100%</strong>
            </div>

            <div className="progress-bar">

              <div className="progress"></div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;