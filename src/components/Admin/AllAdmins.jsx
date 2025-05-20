import React, { useState, useEffect } from "react";
import "./allAdmins.css";

function AllAdmins() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    // Fetch admin data (Replace with your API call)
    const fetchAdmins = async () => {
      const adminData = [
        { id: 1, username: "admin1", email: "admin1@example.com" },
        { id: 2, username: "admin2", email: "admin2@example.com" },
      ];
      setAdmins(adminData);
    };
    fetchAdmins();
  }, []);

  return (
    <div className="all-admins-container">
      <h2>All Admins</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin.id}>
              <td>{admin.id}</td>
              <td>{admin.username}</td>
              <td>{admin.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllAdmins;
