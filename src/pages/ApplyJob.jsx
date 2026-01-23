import { useParams } from "react-router-dom";
import { useState } from "react";
import api from "../api/api";

function ApplyJob() {
  const { jobId } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("resume", resume);

    try {
      await api.post(`/applications/${jobId}/upload`, formData);
      alert("Application submitted successfully");
    } catch (err) {
      alert("Failed to submit application");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>Apply for Job</h2>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        required
      />

      <br /><br />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <br /><br />

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setResume(e.target.files[0])}
        required
      />

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ApplyJob;
