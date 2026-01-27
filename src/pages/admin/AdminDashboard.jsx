import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    navigate("/admin/login");         // redirect to login
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>

      <Link to="/admin/jobs">
        <button>View Jobs</button>
      </Link>

      <br /><br />

      <Link to="/admin/jobs/new">
        <button>Post New Job</button>
      </Link>

      <br /><br />

      <Link to="/admin/contact-messages">
        <button>Contact Messages</button>
      </Link>

      <br /><br />

      <button onClick={handleLogout} style={{ color: "red" }}>
        Logout
      </button>
    </div>
  );
}

export default AdminDashboard;
