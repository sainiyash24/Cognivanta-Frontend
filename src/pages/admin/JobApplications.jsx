import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";

function JobApplications() {
  const { jobId } = useParams();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    api.get(`/admin/jobs/${jobId}/applications`)
      .then(res => setApplications(res.data))
      .catch(() => alert("Failed to load applications"));
  }, [jobId]);

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/admin/applications/${id}/status`, { status });
      alert("Status updated");

      // optional: update UI instantly
      setApplications(prev =>
        prev.map(app =>
          app.id === id ? { ...app, status } : app
        )
      );
    } catch (error) {
      alert("Failed to update status");
    }
  };

  // ✅ UPDATED DOWNLOAD LOGIC
  const downloadResume = async (id) => {
    try {
      const response = await api.get(
        `/admin/applications/${id}/resume`,
        {
          responseType: "blob", // 🔥 VERY IMPORTANT
        }
      );

      // Create blob from PDF
      const blob = new Blob([response.data], {
        type: "application/pdf",
      });

      // Create temporary download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = `resume-${id}.pdf`; // ✅ filename
      document.body.appendChild(link);

      link.click();

      // Cleanup
      link.remove();
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error(error);
      alert("Failed to download resume");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Applications</h2>

      {applications.map(app => (
        <div
          key={app.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <p><b>{app.name}</b> ({app.email})</p>
          <p>Status: {app.status}</p>

          <button onClick={() => downloadResume(app.id)}>
            Download Resume
          </button>

          <br /><br />

          <button onClick={() => updateStatus(app.id, "SHORTLISTED")}>
            Shortlist
          </button>

          <button onClick={() => updateStatus(app.id, "REJECTED")}>
            Reject
          </button>
        </div>
      ))}
    </div>
  );
}

export default JobApplications;
