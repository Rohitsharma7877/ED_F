import React, { useState, useEffect } from "react";
import "./UploadPrescriptionDashboard.css";

const UploadPrescriptionDashboard = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: 'uploadDate',
    direction: 'desc'
  });

  // Define all functions before they're used
  const fetchPrescriptions = async () => {
    try {
      const response = await fetch("https://ed-b.onrender.com/api/prescriptions");
      const data = await response.json();
      if (response.ok) {
        setPrescriptions(data.data || []);
      } else {
        console.error("Failed to fetch prescriptions");
      }
    } catch (err) {
      console.error("Error fetching prescriptions:", err);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const response = await fetch(
        `https://ed-b.onrender.com/api/prescriptions/${id}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      if (response.ok) {
        fetchPrescriptions();
      } else {
        console.error("Failed to update status");
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No date';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid date';
    
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Now we can use the functions safely
  const sortedPrescriptions = [...prescriptions].sort((a, b) => {
    const aValue = a[sortConfig.key] || '';
    const bValue = b[sortConfig.key] || '';
    
    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  return (
    <div className="upload-prescription-dashboard">
      <h2>Upload Prescription</h2>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Phone</th>
            <th 
              onClick={() => requestSort('uploadDate')} 
              className="sortable-header"
            >
              Date & Time
              {sortConfig.key === 'uploadDate' && (
                sortConfig.direction === 'asc' ? ' ↑' : ' ↓'
              )}
            </th>
            <th>File</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedPrescriptions.map((prescription, index) => (
            <tr key={prescription._id || index}>
              <td>{index + 1}</td>
              <td>{prescription.name || '-'}</td>
              <td>{prescription.mobile || '-'}</td>
              <td>
                {prescription.uploadDate 
                  ? formatDate(prescription.uploadDate)
                  : 'No date'
                }
              </td>
              <td>
                {prescription.file ? (
                  <a
                    href={`https://ed-b.onrender.com/uploads/${prescription.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                ) : '-'}
              </td>
              <td>
                <select
                  value={prescription.status || 'pending'}
                  onChange={(e) => handleStatusChange(prescription._id, e.target.value)}
                >
                  <option value="pending">Pending</option>
                  <option value="process">Process</option>
                  <option value="approved">Approved</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UploadPrescriptionDashboard;