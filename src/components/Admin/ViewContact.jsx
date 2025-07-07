// Admin/ViewContact.js
import React, { useState, useEffect } from "react";
import "./ViewContact.css";

const ViewContact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/contact");
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch contacts");
        }

        setContacts(data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const updateStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`http://localhost:4000/api/contact/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          status: newStatus,
          responded: newStatus === "resolved" 
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update status");
      }

      // Update the local state
      setContacts(contacts.map(contact => 
        contact._id === id ? data.data : contact
      ));
    } catch (err) {
      console.error("Error updating status:", err);
      alert(err.message || "Failed to update status");
    }
  };

  const deleteContact = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    
    try {
      const response = await fetch(`http://localhost:4000/api/contact/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete contact");
      }

      // Update the local state
      setContacts(contacts.filter(contact => contact._id !== id));
    } catch (err) {
      console.error("Error deleting contact:", err);
      alert(err.message || "Failed to delete contact");
    }
  };

  const filteredContacts = statusFilter === "all" 
    ? contacts 
    : contacts.filter(contact => contact.status === statusFilter);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="view-contact-container">
      <h1>Contact Submissions</h1>
      
      <div className="filters">
        <label>
          Filter by Status:
          <select 
            value={statusFilter} 
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="new">New</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
        </label>
      </div>

      <div className="contact-list">
        {filteredContacts.length === 0 ? (
          <p>No contacts found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((contact) => (
                <tr key={contact._id}>
                  <td>{new Date(contact.createdAt).toLocaleString()}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td className="message-cell">{contact.message}</td>
                  <td>
                    <select
                      value={contact.status}
                      onChange={(e) => updateStatus(contact._id, e.target.value)}
                    >
                      <option value="new">New</option>
                      <option value="in-progress">In Progress</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </td>
                  <td>
                    <button 
                      onClick={() => deleteContact(contact._id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ViewContact;