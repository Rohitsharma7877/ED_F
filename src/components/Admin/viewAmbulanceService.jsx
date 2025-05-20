import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { Link } from "react-router-dom";
import "./viewAmbulanceService.css";

const ViewAmbulanceService = () => {
  const [requests, setRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchAmbulanceRequests = async () => {
      try {
        const response = await fetch("https://ed-b.onrender.com/api/ambulance-services");
        if (response.ok) {
          const data = await response.json();
          setRequests(data);
          setFilteredRequests(data);
        } else {
          setError("Failed to fetch ambulance requests.");
        }
      } catch (err) {
        console.error("Error fetching ambulance requests:", err);
        setError("An error occurred while fetching ambulance requests.");
      } finally {
        setLoading(false);
      }
    };

    fetchAmbulanceRequests();
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase().trim();
    setSearchTerm(value);

    if (value === "") {
      setFilteredRequests(requests);
    } else {
      const filtered = requests.filter((request) => {
        return (
          (request.name && request.name.toLowerCase().includes(value)) ||
          (request.email && request.email.toLowerCase().includes(value)) ||
          (request.mobile && request.mobile.includes(value))
        );
      });
      setFilteredRequests(filtered);
    }
  };

  const handleExportToExcel = () => {
    const transformedData = filteredRequests.map((request, index) => ({
      "S.No": index + 1,
      Name: request.name,
      Age: request.age,
      Gender: request.gender,
      Email: request.email,
      Mobile: request.mobile,
      "Pick-Up Location": request.pickUpLocation,
      "Drop Location": request.dropLocation,
      Date: new Date(request.date).toLocaleDateString(),
      "Condition Test": request.conditionTest ? "Yes" : "No",
    }));

    const ws = XLSX.utils.json_to_sheet(transformedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "AmbulanceRequests");
    XLSX.writeFile(wb, "ambulance_requests.xlsx");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error-text">{error}</div>;

  return (
    <div className="viewAmbulanceService-container">
      <h2>Ambulance Service Requests</h2>

      <div className="filter-actions">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by Name, Email, or Mobile"
          className="search-filter"
        />
        <button onClick={handleExportToExcel} className="export-button">
          Export to Excel
        </button>
      </div>

      {/* <div className="ambulance-button-container">
        <Link to="/admin/dashboard" className="back-button-ambulance">
          &larr; Back to Dashboard
        </Link>
      </div> */}

      {filteredRequests.length === 0 ? (
        <p>No ambulance requests found.</p>
      ) : (
        <table className="ambulance-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Pick-Up Location</th>
              <th>Drop Location</th>
              <th>Date</th>
              <th>Condition Test</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((request) => (
              <tr key={request._id}>
                <td>{request.name}</td>
                <td>{request.age}</td>
                <td>{request.gender}</td>
                <td>{request.email}</td>
                <td>{request.mobile}</td>
                <td>{request.pickUpLocation}</td>
                <td>{request.dropLocation}</td>
                <td>{new Date(request.date).toLocaleDateString()}</td>
                <td>{request.conditionTest ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewAmbulanceService;
