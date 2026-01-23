import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "10px" }}>
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p><b>Location:</b> {job.location}</p>
      <p><b>Experience:</b> {job.experience}</p>

      <Link to={`/apply/${job.id}`}>
        <button>Apply</button>
      </Link>
    </div>
  );
}

export default JobCard;
