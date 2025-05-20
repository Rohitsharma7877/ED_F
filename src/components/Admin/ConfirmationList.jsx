import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import "./confirmationList.css";

const ConfirmationList = () => {
  const [confirmations, setConfirmations] = useState([]);
  const [filteredConfirmations, setFilteredConfirmations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const formatDate = (date) => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const fetchConfirmations = async () => {
      try {
        const response = await fetch("https://ed-b.onrender.com/api/form-data");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setConfirmations(data);
        setFilteredConfirmations(data);
      } catch (error) {
        console.error("Error fetching confirmations:", error);
      }
    };

    fetchConfirmations();
  }, []);

  const handleExportToExcel = () => {
    const transformedData = filteredConfirmations.map((item, index) => ({
      "S.No": index + 1,
      Name: item.name,
      Service: item.service,
      Mobile: item.mobile,
      Email: item.email,
      Age: item.age,
      PickUpLocation: item.pickUpLocation || "-",
      DropLocation: item.dropLocation || "-",
      "Date of Booking": formatDate(item.bookingDate),
      "Process Completed": item.processCompleted || "Pending",
    }));

    const ws = XLSX.utils.json_to_sheet(transformedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Confirmations");
    XLSX.writeFile(wb, "confirmation_list.xlsx");
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase().trim();
    setSearchTerm(value);

    const filtered = confirmations.filter((confirmation) => {
      return (
        confirmation.name.toLowerCase().includes(value) ||
        confirmation.service.toLowerCase().includes(value) ||
        confirmation.mobile.includes(value)
      );
    });

    setFilteredConfirmations(filtered);
  };

  const handleActionUpdate = async (index, status) => {
    const updatedConfirmations = [...filteredConfirmations];
    updatedConfirmations[index].processCompleted = status;
    setFilteredConfirmations(updatedConfirmations);

    const confirmationId = filteredConfirmations[index]._id;

    try {
      const response = await fetch(
        "https://ed-b.onrender.com/api/update-process-status",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: confirmationId,
            status: status,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update process status");
      }

      const updatedConfirmation = await response.json();
      console.log("Status updated successfully:", updatedConfirmation);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleDateFilter = (event) => {
    const value = event.target.value;
    setSelectedDate(value);

    if (!value) {
      setFilteredConfirmations(confirmations);
    } else {
      const filtered = confirmations.filter((confirmation) => {
        const bookingDate = formatDate(confirmation.bookingDate);
        return bookingDate === value;
      });

      setFilteredConfirmations(filtered);
    }
  };

  return (
    <div className="confirmation-list-main">
      <div className="confirmation-list-container">
        <h2 className="confirmation-h2">Our Services List</h2>
        <div className="actions">
          <button onClick={handleExportToExcel} className="export-btn">
            Export to Excel
          </button>
          <a href="/admin/dashboard" className="back-btn">
            &larr; Back to Dashboard
          </a>
        </div>

        <div className="filter-container">
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateFilter}
            placeholder="Filter by Date"
            className="confirm-date-filter"
          />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by Name, Service, or Mobile"
            className="search-filter"
          />
        </div>

        <table className="confirmation-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Service</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Age</th>
              <th>PickUpLocation</th>
              <th>DropLocation</th>
              <th>Date of Booking</th>
              <th>Process Completed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredConfirmations.length > 0 ? (
              filteredConfirmations.map((confirmation, index) => (
                <tr key={confirmation._id}>
                  <td>{confirmation.name}</td>
                  <td>{confirmation.service}</td>
                  <td>{confirmation.mobile}</td>
                  <td>{confirmation.email}</td>
                  <td>{confirmation.age}</td>
                  <td>{confirmation.pickUpLocation || "-"}</td>
                  <td>{confirmation.dropLocation || "-"}</td>
                  <td>{formatDate(confirmation.bookingDate)}</td>
                  <td
                    className={`${
                      confirmation.processCompleted === "Completed"
                        ? "completed"
                        : confirmation.processCompleted === "Under Process"
                        ? "under-process"
                        : "pending"
                    }`}
                  >
                    {confirmation.processCompleted || "Pending"}
                  </td>
                  <td>
                    <select
                      value={confirmation.processCompleted || "Pending"}
                      onChange={(e) =>
                        handleActionUpdate(index, e.target.value)
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                      <option value="Under Process">Under Process</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10">No confirmations available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConfirmationList;
