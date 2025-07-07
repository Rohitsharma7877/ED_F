import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminCart.css";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";

const AdminCart = () => {
  const [carts, setCarts] = useState([]); // Initialize as empty array
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminCarts = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:4000/api/admin-carts");
        
        if (!response.ok) {
          throw new Error("Failed to fetch cart data");
        }
        
        const data = await response.json();
        
        // Ensure data is an array
        if (!Array.isArray(data)) {
          throw new Error("Invalid data format received");
        }
        
        setCarts(data);
      } catch (error) {
        console.error("Error fetching admin carts:", error);
        setError(error.message);
        toast.error("Failed to load cart data");
      } finally {
        setLoading(false);
      }
    };

    fetchAdminCarts();
  }, []);

  // Filter function with proper null checks
  const filteredCarts = Array.isArray(carts) 
    ? carts.filter(cart => {
        if (!cart) return false;
        
        const matchesUser = cart.userName?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          cart.userMobile?.includes(searchTerm);
        
        const matchesTest = cart.tests?.some(test => 
          test.testName?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        return matchesUser || matchesTest;
      })
    : [];

  const handleStatusChange = async (cartId, newStatus) => {
    try {
      const response = await fetch(`http://localhost:4000/api/admin-carts/${cartId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      setCarts(carts.map(cart => 
        cart._id === cartId ? { ...cart, status: newStatus } : cart
      ));
      toast.success("Status updated successfully");
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  if (loading) {
    return <div className="admin-cart-container">Loading cart data...</div>;
  }

  if (error) {
    return <div className="admin-cart-container error">{error}</div>;
  }

  return (
    <div className="admin-cart-container">
      <h2>User Test Selections</h2>
      
      <div className="admincart-search-bar">
        <FaSearch className="admincart-search-icon" />
        <input
          type="text"
          placeholder="Search by user name, mobile, or test..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="cart-items-table">
        {filteredCarts.length > 0 ? (
          filteredCarts.map((cart) => (
            <div key={cart._id} className="user-cart-card">
              <div className="user-info">
                <h3>{cart.userName || "Unknown User"}</h3>
                <p>Email: {cart.userEmail || "N/A"}</p>
                <p>Mobile: {cart.userMobile || "N/A"}</p>
                <p>Total: ₹{cart.totalAmount || 0}</p>
                <p>Date: {new Date(cart.createdAt).toLocaleString()}</p>
                <select
                  value={cart.status || "pending"}
                  onChange={(e) => handleStatusChange(cart._id, e.target.value)}
                  className="status-select"
                >
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              
              <div className="tests-list">
                <h4>Selected Tests:</h4>
                <ul>
                  {cart.tests?.map((test, index) => (
                    <li key={index}>
                      {test.testName || "Unknown Test"} 
                      (Qty: {test.quantity || 1}) - ₹{test.price ? test.price * (test.quantity || 1) : 0}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <div className="no-items">
            {searchTerm ? "No matching results found" : "No cart items found"}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCart;