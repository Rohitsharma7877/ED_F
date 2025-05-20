import React, { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx"; // Import xlsx library
import "./fetchRegistration.css";

const FetchRegistrations = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // Search query state

  useEffect(() => {
    // Fetch registration data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/admin-registrations"
        );
        setRegistrations(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle date filter change
  const handleDateFilterChange = (e) => {
    setDateFilter(e.target.value);
  };

  // Handle search query change
  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter registrations based on the selected date and search query
  const filteredRegistrations = registrations.filter((registration) => {
    const matchesDate = dateFilter ? registration.date === dateFilter : true; // Apply date filter if selected
    const matchesSearch = registration.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase()); // Apply search filter
    return matchesDate && matchesSearch;
  });

  // Function to export the filtered registrations to Excel
  const handleExportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredRegistrations); // Convert filtered registrations to sheet
    const wb = XLSX.utils.book_new(); // Create a new workbook
    XLSX.utils.book_append_sheet(wb, ws, "Registrations"); // Append the sheet to the workbook
    XLSX.writeFile(wb, "registrations.xlsx"); // Export the workbook as a file
  };

  return (
    <div className="fetch-container">
      <div className="fetch-title">Registrations</div>

      {/* Date Filter */}
      <div className="filter-container">
        <input
          type="date"
          id="dateFilter"
          value={dateFilter}
          onChange={handleDateFilterChange}
          className="date-filter"
        />
      </div>

      {/* Search and Export Button in Right Side */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          className="search-input"
        />

        <button className="excel-button" onClick={handleExportToExcel}>
          Export to Excel
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <table className="fetch-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Pincode</th>
              <th>Address</th>
              <th>State</th>
              <th>Date</th>
              <th>Time</th>
              <th>Book For</th>
              <th>Services</th>
              <th>Client Name</th> {/* New Column */}
              <th>Doctor Reference</th> {/* New Column */}
            </tr>
          </thead>
          <tbody>
            {filteredRegistrations.map((registration, index) => (
              <tr key={index}>
                <td>{registration.name}</td>
                <td>{registration.mobile}</td>
                <td>{registration.age}</td>
                <td>{registration.gender}</td>
                <td>{registration.email}</td>
                <td>{registration.pincode}</td>
                <td>{registration.address}</td>
                <td>{registration.state}</td>
                <td>{registration.date}</td>
                <td>{registration.time}</td>
                <td>{registration.bookFor}</td>
                <td>{registration.serviceName}</td>
                <td>{registration.clientName}</td> {/* Client Name */}
                <td>{registration.doctorRef}</td> {/* Doctor Reference */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FetchRegistrations;
