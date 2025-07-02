import React, { useState, useEffect } from "react";
import "./AdminCareer.css";

const AdminCareer = () => {
  const [careers, setCareers] = useState([]);
  const [formData, setFormData] = useState({
    category: "",
    jobTitle: "",
    experienceLevel: "",
    reportsTo: "",
    overview: "",
    responsibilities: "",
    qualifications: ""
  });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://ed-b-1.onrender.com/api/careers");
      const data = await response.json();
      if (response.ok) {
        setCareers(data.data);
      }
    } catch (error) {
      console.error("Error fetching careers:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const url = editId 
      ? `https://ed-b-1.onrender.com/api/careers/${editId}`
      : "https://ed-b-1.onrender.com/api/careers";
    
    const method = editId ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(`Career ${editId ? "updated" : "created"} successfully!`);
        fetchCareers();
        resetForm();
      }
    } catch (error) {
      console.error("Error submitting career:", error);
    }
  };

  const handleEdit = (career) => {
    setFormData({
      category: career.category,
      jobTitle: career.jobTitle,
      experienceLevel: career.experienceLevel,
      reportsTo: career.reportsTo || "",
      overview: career.overview,
      responsibilities: career.responsibilities.join("\n"),
      qualifications: career.qualifications.join("\n")
    });
    setEditId(career._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this career?")) {
      try {
        const response = await fetch(`https://ed-b-1.onrender.com/api/careers/${id}`, {
          method: "DELETE"
        });

        if (response.ok) {
          alert("Career deleted successfully!");
          fetchCareers();
        }
      } catch (error) {
        console.error("Error deleting career:", error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      category: "",
      jobTitle: "",
      experienceLevel: "",
      reportsTo: "",
      overview: "",
      responsibilities: "",
      qualifications: ""
    });
    setEditId(null);
  };

  return (
    <div className="admin-career-container">
      <h1>Career Management</h1>
      
      <form onSubmit={handleSubmit} className="career-form">
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Experience Level:</label>
          <input
            type="text"
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Reports To:</label>
          <input
            type="text"
            name="reportsTo"
            value={formData.reportsTo}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Overview:</label>
          <textarea
            name="overview"
            value={formData.overview}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Responsibilities (one per line):</label>
          <textarea
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Qualifications (one per line):</label>
          <textarea
            name="qualifications"
            value={formData.qualifications}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            {editId ? "Update" : "Create"}
          </button>
          {editId && (
            <button type="button" onClick={resetForm} className="cancel-btn">
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="career-list">
        <h2>Current Job Listings</h2>
        {loading ? (
          <p>Loading...</p>
        ) : careers.length === 0 ? (
          <p>No careers found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Job Title</th>
                <th>Experience</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {careers.map((career) => (
                <tr key={career._id}>
                  <td>{career.category}</td>
                  <td>{career.jobTitle}</td>
                  <td>{career.experienceLevel}</td>
                  <td>
                    <button onClick={() => handleEdit(career)} className="edit-btn">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(career._id)} className="delete-btn">
                      Delete
                    </button>
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

export default AdminCareer;