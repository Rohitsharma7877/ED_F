import React, { useEffect, useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx"; // Import xlsx library
import { Link } from "react-router-dom"; // Import Link for navigation
import "./bookingList.css";

function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // Search term for filtering
  const [selectedDate, setSelectedDate] = useState(""); // Selected date for filtering

  // Function to format the appointment date as dd/mm/yyyy
  const formatDate = (date) => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, "0"); // Ensure two digits for day
    const month = (d.getMonth() + 1).toString().padStart(2, "0"); // Get month as number (0-11, hence +1)
    const year = d.getFullYear();

    // Return formatted date as dd/mm/yyyy
    return `${day}/${month}/${year}`;
  };

  // Function to fetch bookings
  const fetchBookings = async () => {
    try {
      const response = await axios.get("https://ed-b.onrender.com/api/bookings");
      const bookingsData = response.data;
      setBookings(bookingsData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setLoading(false);
    }
  };

  // Function to export data to Excel
  const exportToExcel = () => {
    const transformedData = bookings.map((booking, index) => ({
      "S.No": index + 1, // Serial number starts from 1
      Name: booking.name,
      "Mobile Number": booking.mobileNumber,
      "Appointment Date": formatDate(booking.appointmentDate), // Format date here
      Pincode: booking.pincode,
    }));

    const worksheet = XLSX.utils.json_to_sheet(transformedData); // Convert transformed data to sheet
    const workbook = XLSX.utils.book_new(); // Create a new workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Bookings"); // Append the sheet
    XLSX.writeFile(workbook, "bookings.xlsx"); // Trigger file download
  };

  // Function to handle search input
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter the bookings based on search term
    const filtered = bookings.filter(
      (booking) =>
        booking.name.toLowerCase().includes(value.toLowerCase()) ||
        booking.mobileNumber.includes(value)
    );
    setFilteredBookings(filtered);
  };

  // Function to handle date filter
  const handleDateFilter = (event) => {
    const value = event.target.value;
    setSelectedDate(value);

    // Filter bookings based on the selected date
    const filtered = bookings.filter(
      (booking) => booking.appointmentDate.split("T")[0] === value
    );
    setFilteredBookings(filtered);
  };

  // Combine search and date filter logic
  useEffect(() => {
    fetchBookings();
  }, []);

  // Filter bookings if there's a search term or selected date
  useEffect(() => {
    if (searchTerm || selectedDate) {
      const filtered = bookings.filter((booking) => {
        const matchSearch =
          booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          booking.mobileNumber.includes(searchTerm);
        const matchDate = selectedDate
          ? booking.appointmentDate.split("T")[0] === selectedDate
          : true;
        return matchSearch && matchDate;
      });
      setFilteredBookings(filtered);
    } else {
      setFilteredBookings(bookings);
    }
  }, [searchTerm, selectedDate, bookings]);

  return (
    // <div className="booking-List-main">
    <div className="booking-list-container">
      <h2>Book Now List</h2>
      <div className="actions">
        <button onClick={exportToExcel} className="book-export-button">
          Export to Excel
        </button>
        <a href="/admin/dashboard" className="back-button">
          &larr; Back to Dashboard
        </a>
      </div>

      {/* Date Filter */}
      <div className="filter-container">
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateFilter}
          placeholder="Filter by Date"
          className="book-date-filter"
        />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by Name or Mobile Number"
          className="search-filter"
        />
      </div>

      {/* Display Bookings */}
      {loading ? (
        <p>Loading bookings...</p>
      ) : filteredBookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div>
          {/* <h3>Bookings</h3> */}
          <table className="booking-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile Number</th>
                <th>Appointment Date</th>
                <th>Pincode</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.name}</td>
                  <td>{booking.mobileNumber}</td>
                  <td>{formatDate(booking.appointmentDate)}</td>{" "}
                  {/* Appointment Date in dd/mm/yyyy format */}
                  <td>{booking.pincode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    // </div>
  );
}

export default BookingList;
