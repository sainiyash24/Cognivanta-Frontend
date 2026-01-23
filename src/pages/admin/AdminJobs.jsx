import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";

function AdminJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api.get("/jobs")
      .then(res => setJobs(res.data))
      .catch(() => alert("Unauthorized"));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Jobs</h2>

      {jobs.map(job => (
        <div key={job.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <h3>{job.title}</h3>

          <Link to={`/admin/jobs/${job.id}/applications`}>
            <button>View Applications</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AdminJobs;
