import { BrowserRouter, Routes, Route } from "react-router-dom";

import Jobs from "./pages/Jobs";
import ApplyJob from "./pages/ApplyJob";
import AdminLogin from "./pages/AdminLogin";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminJobs from "./pages/admin/AdminJobs";
import JobApplications from "./pages/admin/JobApplications";
import PostJob from "./pages/admin/PostJob";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Jobs />} />
        <Route path="/apply/:jobId" element={<ApplyJob />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/jobs" element={<AdminJobs />} />
        <Route
          path="/admin/jobs/:jobId/applications"
          element={<JobApplications />}
        />
        <Route path="/admin/jobs/new" element={<PostJob />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
