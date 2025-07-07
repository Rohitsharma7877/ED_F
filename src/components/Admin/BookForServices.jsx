import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import "./BookForServices.css";

const BookForServices = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedService, setSelectedService] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingsPerPage] = useState(10);

  useEffect(() => {
    fetchServiceBookings();
  }, []);

  const fetchServiceBookings = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/service-bookings"
      );
      if (!response.ok) throw new Error("Failed to fetch service bookings");
      const data = await response.json();
      setBookings(data);
      setFilteredBookings(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/service-bookings/${bookingId}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update status");
      }

      // Update the local state to reflect the change immediately
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking._id === bookingId
            ? { ...booking, status: newStatus }
            : booking
        )
      );

      setFilteredBookings((prevFilteredBookings) =>
        prevFilteredBookings.map((booking) =>
          booking._id === bookingId
            ? { ...booking, status: newStatus }
            : booking
        )
      );

      // Optional: Show success message
      // alert("Status updated successfully!");
    } catch (error) {
      console.error("Error updating status:", error);
      alert(error.message || "Failed to update status");
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = bookings.filter((booking) => {
      const matchesSearch =
        booking.name.toLowerCase().includes(value) ||
        booking.email.toLowerCase().includes(value) ||
        booking.mobile.includes(value) ||
        (booking.testName && booking.testName.toLowerCase().includes(value));

      const matchesService =
        selectedService === "all" ||
        booking.serviceType.toLowerCase() === selectedService.toLowerCase();

      const matchesDate =
        !selectedDate ||
        formatDate(booking.appointmentDate) === formatDate(selectedDate);

      return matchesSearch && matchesService && matchesDate;
    });

    setFilteredBookings(filtered);
    setCurrentPage(1);
  };

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
        booking.mobile.includes(searchTerm) ||
        (booking.testName &&
          booking.testName.toLowerCase().includes(searchTerm));

      if (!value) return matchesService && matchesSearch;
      return (
        formatDate(booking.appointmentDate) === formatDate(value) &&
        matchesService &&
        matchesSearch
      );
    });

    setFilteredBookings(filtered);
    setCurrentPage(1);
  };

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
        booking.mobile.includes(searchTerm) ||
        (booking.testName &&
          booking.testName.toLowerCase().includes(searchTerm));

      if (value === "all") return matchesDate && matchesSearch;
      return (
        booking.serviceType.toLowerCase() === value.toLowerCase() &&
        matchesDate &&
        matchesSearch
      );
    });

    setFilteredBookings(filtered);
    setCurrentPage(1);
  };

  const handleExportToExcel = () => {
    const transformedData = filteredBookings.map((booking, index) => ({
      "S.No": index + 1,
      "Service Type": booking.serviceType,
      "Test Name": booking.testName || "-",
      Name: booking.name,
      Email: booking.email,
      Mobile: booking.mobile,
      Age: booking.age,
      Gender: booking.gender,
      Status: booking.status || "Pending",
      "Appointment Date": formatDate(booking.appointmentDate),
      "Booking Date": formatDate(booking.createdAt),
    }));

    const ws = XLSX.utils.json_to_sheet(transformedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Service Bookings");
    XLSX.writeFile(wb, "service_bookings.xlsx");
  };

  // Pagination logic
  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = filteredBookings.slice(
    indexOfFirstBooking,
    indexOfLastBooking
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

      {loading && <p className="loading-text">Loading data...</p>}
      {error && <p className="error-text">{error}</p>}

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
            placeholder="Search by name, email, test or mobile"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <button onClick={handleExportToExcel} className="export-btn">
          Export to Excel
        </button>
      </div>

      {!loading && !error && (
        <div className="bookings-table-container">
          <table className="bookings-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Service Type</th>
                <th>Test Name</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Appointment Date</th>
                <th>Booking Date</th>
              </tr>
            </thead>
            <tbody>
              {currentBookings.length > 0 ? (
                currentBookings.map((booking, index) => (
                  <tr key={booking._id}>
                    <td>{indexOfFirstBooking + index + 1}</td>
                    <td>{booking.serviceType}</td>
                    <td>{booking.testName || "-"}</td>
                    <td>{booking.name}</td>
                    <td>{booking.email}</td>
                    <td>{booking.mobile}</td>
                    <td>{booking.age}</td>
                    <td>{booking.gender}</td>
                    <td>
                      <select
                        value={booking.status || "Pending"}
                        onChange={(e) =>
                          handleStatusChange(booking._id, e.target.value)
                        }
                        className={`status-select ${
                          booking.status?.toLowerCase() || "pending"
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>

                    <td>{formatDate(booking.appointmentDate)}</td>
                    <td>{formatDate(booking.createdAt)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="11" className="no-data">
                    No bookings found matching your criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {filteredBookings.length > bookingsPerPage && (
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-nav"
          >
            &laquo; Prev
          </button>

          {Array.from({
            length: Math.ceil(filteredBookings.length / bookingsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              className={`pagination-btn ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage ===
              Math.ceil(filteredBookings.length / bookingsPerPage)
            }
            className="pagination-nav"
          >
            Next &raquo;
          </button>
        </div>
      )}
    </div>
  );
};

export default BookForServices;
