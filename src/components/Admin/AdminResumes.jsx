import React, { useState, useEffect } from "react";
import "./AdminResumes.css";
import axios from "axios";

const AdminResumes = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/resumes");
      setResumes(response.data.data);
    } catch (error) {
      console.error("Error fetching resumes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:4000/api/resumes/${id}`, {
        status: newStatus,
      });
      fetchResumes(); // Refresh the list
    } catch (error) {
      console.error("Error updating resume status:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this resume?")) {
      try {
        await axios.delete(`http://localhost:4000/api/resumes/${id}`);
        fetchResumes(); // Refresh the list
      } catch (error) {
        console.error("Error deleting resume:", error);
      }
    }
  };

  const downloadResume = async (id) => {
    window.open(`http://localhost:4000/api/resumes/${id}/download`, "_blank");
  };

  const filteredResumes = resumes.filter((resume) => {
    const matchesStatus =
      statusFilter === "All" || resume.status === statusFilter;
    const matchesSearch =
      resume.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resume.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resume.jobCategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  if (loading) return <div>Loading resumes...</div>;

  return (
    <div className="admin-resumes-container">
      <h1>Resume Submissions</h1>

      <div className="filters">
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search by name, email, or category"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="status-filter">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className={`status-dropdown ${statusFilter.toLowerCase()}`}
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Reviewed">Reviewed</option>
            <option value="Shortlisted">Shortlisted</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      <div className="resumes-list">
        {filteredResumes.length === 0 ? (
          <p>No resumes found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Job Category</th>
                <th>Submission Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredResumes.map((resume) => (
                <tr key={resume._id}>
                  <td>{resume.name}</td>
                  <td>{resume.email}</td>
                  <td>{resume.phone}</td>
                  <td>{resume.jobCategory}</td>
                  <td>
                    {new Date(resume.submissionDate).toLocaleDateString()}
                  </td>
                  <td>
                    <select
                      className={`status-dropdown ${resume.status.toLowerCase()}`}
                      value={resume.status}
                      onChange={(e) =>
                        handleStatusChange(resume._id, e.target.value)
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="Reviewed">Reviewed</option>
                      <option value="Shortlisted">Shortlisted</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>

                  <td>
                    <div className="action-buttons">
                      <button
                        className="download-btn"
                        onClick={() => downloadResume(resume._id)}
                      >
                        Download
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(resume._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminResumes;
