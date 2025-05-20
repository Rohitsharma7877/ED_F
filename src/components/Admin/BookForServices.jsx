import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { Link } from "react-router-dom";
import "./BookForServices.css";

const BookForServices = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedService, setSelectedService] = useState("all");

  // Fetch all service bookings from the backend
  const fetchServiceBookings = async () => {
    try {
      const response = await fetch("https://ed-b.onrender.com/api/service-bookings");
      if (!response.ok) {
        throw new Error("Failed to fetch service bookings");
      }
      const data = await response.json();
      setBookings(data);
      setFilteredBookings(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServiceBookings();
  }, []);

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Handle search functionality
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = bookings.filter((booking) => {
      const matchesSearch =
        booking.name.toLowerCase().includes(value) ||
        booking.email.toLowerCase().includes(value) ||
        booking.mobile.includes(value);
      
      const matchesService = 
        selectedService === "all" || 
        booking.serviceType.toLowerCase() === selectedService.toLowerCase();
      
      const matchesDate = 
        !selectedDate || 
        formatDate(booking.appointmentDate) === formatDate(selectedDate);

      return matchesSearch && matchesService && matchesDate;
    });

    setFilteredBookings(filtered);
  };

  // Handle date filter
  const handleDateFilter = (e) => {
    const value = e.target.value;
    setSelectedDate(value);

    const filtered = bookings.filter((booking) => {
      const matchesService = 
        selectedService === "all" || 
        booking.serviceType.toLowerCase() === selectedService.toLowerCase();
      
      const matchesSearch = 
        !searchTerm ||
        booking.name.toLowerCase().includes(searchTerm) ||
        booking.email.toLowerCase().includes(searchTerm) ||
        booking.mobile.includes(searchTerm);

      if (!value) {
        return matchesService && matchesSearch;
      }
      return (
        formatDate(booking.appointmentDate) === formatDate(value) &&
        matchesService &&
        matchesSearch
      );
    });

    setFilteredBookings(filtered);
  };

  // Handle service type filter
  const handleServiceFilter = (e) => {
    const value = e.target.value;
    setSelectedService(value);

    const filtered = bookings.filter((booking) => {
      const matchesDate = 
        !selectedDate || 
        formatDate(booking.appointmentDate) === formatDate(selectedDate);
      
      const matchesSearch = 
        !searchTerm ||
        booking.name.toLowerCase().includes(searchTerm) ||
        booking.email.toLowerCase().includes(searchTerm) ||
        booking.mobile.includes(searchTerm);

      if (value === "all") {
        return matchesDate && matchesSearch;
      }
      return (
        booking.serviceType.toLowerCase() === value.toLowerCase() &&
        matchesDate &&
        matchesSearch
      );
    });

    setFilteredBookings(filtered);
  };

  // Handle export to Excel
  const handleExportToExcel = () => {
    const transformedData = filteredBookings.map((booking, index) => ({
      "S.No": index + 1,
      "Service Type": booking.serviceType,
      Name: booking.name,
      Email: booking.email,
      Mobile: booking.mobile,
      Age: booking.age,
      Gender: booking.gender,
      "Appointment Date": formatDate(booking.appointmentDate),
      "Booking Date": formatDate(booking.createdAt),
    }));

    const ws = XLSX.utils.json_to_sheet(transformedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Service Bookings");
    XLSX.writeFile(wb, "service_bookings.xlsx");
  };

  // Service type options for filter dropdown
  const serviceTypes = [
    { value: "all", label: "All Services" },
    { value: "mri", label: "MRI" },
    { value: "ct scan", label: "CT Scan" },
    { value: "x-ray", label: "X-Ray" },
    { value: "doctor portal", label: "Doctor Portal" },
    { value: "ultrasonography", label: "Ultrasonography" },
    { value: "tmt", label: "TMT" },
    { value: "mri-mammography", label: "MRI-Mammography" },
    { value: "mammography", label: "Mammography" },
    { value: "ecg", label: "ECG" },
    { value: "bone density", label: "Bone Density" },
    { value: "eeg", label: "EEG" },
    { value: "pulmonary function test", label: "Pulmonary Function Test" },
  ];

  return (
    <div className="book-for-services-container">
      <h2 className="book-for-services-heading">Service Bookings</h2>

      {/* Loading and error states */}
      {loading && <p className="loading-text">Loading data...</p>}
      {error && <p className="error-text">{error}</p>}

      {/* Filter controls */}
      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="service-filter">Service Type:</label>
          <select
            id="service-filter"
            value={selectedService}
            onChange={handleServiceFilter}
          >
            {serviceTypes.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="date-filter">Appointment Date:</label>
          <input
            id="date-filter"
            type="date"
            value={selectedDate}
            onChange={handleDateFilter}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="search">Search:</label>
          <input
            id="search"
            type="text"
            placeholder="Search by name, email, or mobile"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <button onClick={handleExportToExcel} className="export-btn">
          Export to Excel
        </button>
      </div>

      {/* Bookings table */}
      {!loading && !error && (
        <div className="bookings-table-container">
          <table className="bookings-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Service Type</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Appointment Date</th>
                <th>Booking Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.length > 0 ? (
                filteredBookings.map((booking, index) => (
                  <tr key={booking._id}>
                    <td>{index + 1}</td>
                    <td>{booking.serviceType}</td>
                    <td>{booking.name}</td>
                    <td>{booking.email}</td>
                    <td>{booking.mobile}</td>
                    <td>{booking.age}</td>
                    <td>{booking.gender}</td>
                    <td>{formatDate(booking.appointmentDate)}</td>
                    <td>{formatDate(booking.createdAt)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="no-data">
                    No bookings found matching your criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookForServices;