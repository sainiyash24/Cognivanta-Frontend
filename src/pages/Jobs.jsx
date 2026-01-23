import { useEffect, useState } from "react";
import api from "../api/api";
import JobCard from "../components/JobCard";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api.get("/jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Open Positions</h2>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default Jobs;
