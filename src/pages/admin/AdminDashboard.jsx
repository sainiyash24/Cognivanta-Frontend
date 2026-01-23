import { Link } from "react-router-dom";

function AdminDashboard() {
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
    </div>
  );
}

export default AdminDashboard;
