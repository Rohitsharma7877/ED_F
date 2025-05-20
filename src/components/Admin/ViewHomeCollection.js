import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { Link } from "react-router-dom"; // Add this for navigation
import "./ViewHomeCollection.css";

const ViewHomeCollection = () => {
  const [homeCollections, setHomeCollections] = useState([]);
  const [filteredCollections, setFilteredCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // Fetch home collection data from the backend
  const fetchHomeCollections = async () => {
    try {
      const response = await fetch("https://ed-b.onrender.com/api/home-collection");
      if (!response.ok) {
        throw new Error("Failed to fetch home collection data");
      }
      const data = await response.json();
      setHomeCollections(data);
      setFilteredCollections(data); // Initialize filtered collections
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomeCollections();
  }, []);

  // Format date for display
  const formatDate = (date) => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  };

  // Handle search functionality
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase().trim();
    setSearchTerm(value);

    const filtered = homeCollections.filter((collection) => {
      return (
        collection.name.toLowerCase().includes(value) ||
        collection.email.toLowerCase().includes(value) ||
        collection.mobile.includes(value)
      );
    });

    setFilteredCollections(filtered);
  };

  // Handle export to Excel functionality
  const handleExportToExcel = () => {
    const transformedData = filteredCollections.map((collection, index) => ({
      "S.No": index + 1,
      Name: collection.name,
      Email: collection.email,
      Mobile: collection.mobile,
      Address: collection.address,
      "Pin Code": collection.pinCode,
      State: collection.state,
      Date: formatDate(collection.date),
      Time: collection.time,
      Gender: collection.gender,
      "Book For": collection.bookFor,
    }));

    const ws = XLSX.utils.json_to_sheet(transformedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Home Collections");
    XLSX.writeFile(wb, "home_collection_list.xlsx");
  };

  // Handle date filter functionality
  const handleDateFilter = (event) => {
    const value = event.target.value;
    setSelectedDate(value);

    if (!value) {
      setFilteredCollections(homeCollections);
    } else {
      const filtered = homeCollections.filter((collection) => {
        const bookingDate = formatDate(collection.date);
        return bookingDate === value;
      });

      setFilteredCollections(filtered);
    }
  };

  return (
    <div className="HomeCollection-view-main">
      <div className="HomeCollection-container">
        <div className="HomeCollection-data-container">
          <h2 className="HomeCollection-heading">
            Home Collection Appointments
          </h2>

          {/* Loading state */}
          {loading && <p>Loading data...</p>}

          {/* Error state */}
          {error && <p className="error-text">{error}</p>}

          {/* Search, Filter, and Export to Excel */}
          <div className="filter-actions">
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateFilter}
              className="home-date-filter"
              placeholder="Filter by Date"
            />
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

          {/* Back to Dashboard Button */}
          {/* <div className="button-container">
            <Link to="/admin/dashboard" className="back-button">
              &larr; Back to Dashboard
            </Link>
          </div> */}

          {/* Display Home Collections in table */}
          {!loading && !error && (
            <table className="HomeCollection-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Address</th>
                  <th>Pin Code</th>
                  <th>State</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Gender</th>
                  <th>Book For</th>
                </tr>
              </thead>
              <tbody>
                {filteredCollections.length > 0 ? (
                  filteredCollections.map((collection) => (
                    <tr key={collection._id}>
                      <td>{collection.name}</td>
                      <td>{collection.email}</td>
                      <td>{collection.mobile}</td>
                      <td>{collection.address}</td>
                      <td>{collection.pinCode}</td>
                      <td>{collection.state}</td>
                      <td>{formatDate(collection.date)}</td>
                      <td>{collection.time}</td>
                      <td>{collection.gender}</td>
                      <td>{collection.bookFor}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10">No home collections available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewHomeCollection;
