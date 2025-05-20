import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import adminImage from "./indianGroupDoctors.jpg";
import "./adminDashboard.css";

function AdminDashboard() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the role from localStorage or session
    const userRole = localStorage.getItem("role");
    if (!userRole) {
      // Redirect to login if role is not defined
      window.location.href = "/log-in";
    }
    setRole(userRole || "admin");
  }, []);

  // Helper to toggle dropdown visibility
  const toggleDropdown = (section) => {
    setActiveDropdown(activeDropdown === section ? null : section);
  };

  // Helper to determine arrow direction
  const getArrow = (section) => (activeDropdown === section ? "▲" : "▼");

  // Sign-out functionality
  const handleSignOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/log-in";
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <div className="sidebar-header">
          <img src={adminImage} alt="Admin" className="admin-image" />
          <h2 className="sidebar-title">
            {role === "super-admin" ? "Super Admin Panel" : "Admin Panel"}
          </h2>
        </div>
        <nav className="sidebar-links">
          {/* Registration Link */}
          <div
            className={`sidebar-link ${
              activeDropdown === "registration" ? "active" : ""
            }`}
            onClick={() => navigate("admin-offline-registration")}
          >
            <span className="icon">
              <i className="fas fa-calendar-plus"></i>
            </span>{" "}
            OffLine Registration
          </div>

          <div
            className={`sidebar-link ${
              activeDropdown === "admin-offline-registration" ? "active" : ""
            }`}
            onClick={() => navigate("admin-offline-registration/view-offline-registrations")}
          >
            <span className="icon">
              <i className="fas fa-calendar-check"></i>
            </span>{" "}
            View Registration
          </div>

          <div
            className={`sidebar-link ${
              activeDropdown === "view-contact-us" ? "active" : ""
            }`}
            onClick={() => navigate("view-contact-us")}
          >
            <span className="icon">
              <i className="fas fa-calendar-check"></i>
            </span>{" "}
            Contact Us
          </div>

          <div
            className={`sidebar-link ${
              activeDropdown === "upload-prescription" ? "active" : ""
            }`}
            onClick={() => navigate("upload-prescription")}
          >
            <span className="icon">
              <i className="fas fa-calendar-check"></i>
            </span>{" "}
            Upload-Prescription
          </div>

          {/* Service-List Dropdown */}
          <div
            className="sidebar-link"
            onClick={() => toggleDropdown("service-list")}
          >
            <span className="icon">
              <i className="fas fa-flask"></i>
            </span>
            Service-List
            <span className="arrow">{getArrow("service-list")}</span>
          </div>
          <div
            className={`dropdown-container ${
              activeDropdown === "service-list" ? "show" : ""
            }`}
          >
            <Link to="category" className="dropdown-item">
              Category
            </Link>
            <Link to="sub-category" className="dropdown-item">
              Sub-Category
            </Link>
            <Link to="expert-service-list" className="dropdown-item">
              Expert-PackageList
            </Link>
          </div>

          {/* View Tests Dropdown */}
          <div
            className="sidebar-link"
            onClick={() => toggleDropdown("OnLine-registration")}
          >
            <span className="icon">
              <i className="fas fa-flask"></i>
            </span>
            OnLine Registration
            <span className="arrow">{getArrow("OnLine-registration")}</span>
          </div>
          <div
            className={`dropdown-container ${
              activeDropdown === "OnLine-registration" ? "show" : ""
            }`}
          >
            <Link to="home-collection" className="dropdown-item">
              Home Collection
            </Link>
            <Link to="book-appointment" className="dropdown-item">
              Book Appointment
            </Link>
            <Link to="ambulance-services" className="dropdown-item">
            Ambulance Service
            </Link>
          </div>

          {/* Appointments Dropdown */}
          <div
            className="sidebar-link"
            onClick={() => toggleDropdown("book-for-test")}
          >
            <span className="icon">
              <i className="fas fa-calendar-day"></i>
            </span>
            Call Back Request
            <span className="arrow">{getArrow("book-for-test")}</span>
          </div>
          <div
            className={`dropdown-container ${
              activeDropdown === "book-for-test" ? "show" : ""
            }`}
          >
            <Link to="request-callback" className="dropdown-item">
              Request Callback
            </Link>
            <Link to="test-booking" className="dropdown-item">
              Book Test service
            </Link>
          </div>

          {/* Admin Management (Super-Admin Only) */}
          {role === "super-admin" && (
            <>
              <div
                className="sidebar-link"
                onClick={() => toggleDropdown("adminManagement")}
              >
                <span className="icon">
                  <i className="fas fa-users-cog"></i>
                </span>
                Admins
                <span className="arrow">{getArrow("adminManagement")}</span>
              </div>
              <div
                className={`dropdown-container ${
                  activeDropdown === "adminManagement" ? "show" : ""
                }`}
              >
                <Link to="createAdmin" className="dropdown-item">
                  Create Admin Login
                </Link>
                <Link to="allAdmins" className="dropdown-item">
                  View All Admins
                </Link>
              </div>
            </>
          )}
        </nav>

        {/* Sign-Out Button */}
        <div
          className="sidebar-link sidebar-link-signout"
          onClick={handleSignOut}
        >
          <span className="icon">
            <i className="fas fa-sign-out-alt"></i>
          </span>{" "}
          Sign Out
        </div>
      </div>

      {/* Main Content Area */}
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboard;
