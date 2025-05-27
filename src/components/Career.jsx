import React, { useState, useEffect } from "react";
import "./Career.css";
import ResumeModal from "./ResumeModal";

const Career = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [jobRoles, setJobRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  useEffect(() => {
    const fetchJobRoles = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/careers");
        const data = await response.json();
        if (response.ok) {
          setJobRoles(data.data);
          if (data.data.length > 0) {
            setSelectedCategory(data.data[0].category);
          }
        }
      } catch (error) {
        console.error("Error fetching job roles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobRoles();
  }, []);

  const handleResumeSubmit = () => {
    setShowResumeModal(true);
  };

  const handleSubmissionSuccess = () => {
    setSubmissionSuccess(true);
    setTimeout(() => setSubmissionSuccess(false), 3000);
  };

  const selectedRole = jobRoles.find(
    (item) => item.category === selectedCategory
  );
  const uniqueCategories = [...new Set(jobRoles.map((role) => role.category))];

  if (loading) return <div>Loading...</div>;

  return (
    <div className="career-wrapper">
      {/* Full-width Banner */}
      <div className="career-banner">
        <div className="career-banner-overlay">
          <h1 className="career-banner-title">Career</h1>
        </div>
      </div>

      {/* Jobs Section */}
      <div className="career-jobs">
        <h2 className="career-heading">Jobs Recommended For You</h2>
        <p className="career-subheading">
          Join Our Team and Make a Difference in Healthcare
        </p>

        {/* Filter Buttons */}
        <div className="career-filters">
          {uniqueCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`career-filter-btn ${
                selectedCategory === category ? "active" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Category Description */}
        <div className="category-content">
          {selectedRole && (
            <>
              <h1 style={{ fontSize: "2rem", color: "#a7c1e0" }}>
                <strong>{selectedRole.category}</strong>
              </h1>

              <h3>
                <strong>Job Title:</strong> {selectedRole.jobTitle}
              </h3>
              <h3>
                <strong>Experience Level:</strong>{" "}
                {selectedRole.experienceLevel}
              </h3>
              <br />
              <h3>
                <strong>Job Overview:</strong> {selectedRole.overview}
              </h3>

              <div>
                <strong>Key Responsibilities:</strong>{" "}
                <ul>
                  {selectedRole.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <strong>Qualifications:</strong>
                <ul>
                  {selectedRole.qualifications.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Resume Submission Section */}
      <div className="resume-section">
        <h2>Can't find a suitable job role?</h2>
        <p className="resume-paragraph">
          Please submit your resume, and we will review it for suitable job
          openings. We will reach out to you when a relevant position becomes
          available.
        </p>

        {submissionSuccess && (
          <div className="success-message">
            Your resume has been submitted successfully!
          </div>
        )}

        <div className="resume-form">
          <button
            className="resume-btn"
            onClick={handleResumeSubmit}
          >
            Submit Resume
          </button>
        </div>
      </div>

      {showResumeModal && (
        <ResumeModal
          categories={uniqueCategories}
          onClose={() => setShowResumeModal(false)}
          onSubmitSuccess={handleSubmissionSuccess}
          initialCategory={selectedCategory} // Pass the currently selected category as default
        />
      )}
    </div>
  );
};

export default Career;