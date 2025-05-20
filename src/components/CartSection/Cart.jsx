import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { GrSearch } from "react-icons/gr";

const initialProducts = [
  {
    id: 1,
    name: "Complete Blood Count (CBC)",
    price: 330,
    quantity: 1,
  },
  {
    id: 2,
    name: "Covid Test",
    price: 220,
    quantity: 1,
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialProducts);
  const [showMemberDetails, setShowMemberDetails] = useState(false);
  const navigate = useNavigate();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); 


  const handleAddMoreTest = () => {
    navigate("/", { state: { showDiagnosticService: true } });
    setTimeout(() => {
      window.scrollTo({
        top: 550, // Scroll 20px down
        behavior: "smooth", // Smooth scrolling
      });
    }, 100); // Delay to ensure navigation is completed
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value); // Update the search query
  };

  const filteredItems = cartItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNext = () => {
    setShowMemberDetails(true);
  };

  const handleBackToCart = () => {
    setShowMemberDetails(false);
  };

  const handleOpenPaymentModal = () => {
    setShowPaymentModal(true);
  };

  const handleClosePaymentModal = () => {
    setShowPaymentModal(false);
  };

  if (showMemberDetails) {
    // Member Details Form will change
    return (
      <div
        className="user-details-container"
        style={{
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          background: "#f9f9f9",
          minHeight: "100vh",
          paddingTop: "20vh",
        }}
      >
        <h3>User Details</h3>
        <div
          className="form-section"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {/* Form Section */}
          <div
            style={{
              flex: 2,
              background: "#fff",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div>
              <label htmlFor="userId">User ID:</label>
              <input
                id="userId"
                type="text"
                placeholder="Enter User ID"
                style={{
                  background: "#f1f1f1",
                  padding: "10px",
                  borderRadius: "4px",
                  width: "20%",
                  marginTop: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            <div style={{ marginTop: "20px" }}>
              <label>
                <input type="radio" name="member" defaultChecked /> Self
              </label>
              <label style={{ marginLeft: "10px" }}>
                <input type="radio" name="member" /> Family Members
              </label>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              <div style={{ flex: 1 }}>
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Name"
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "5px",
                    background: "#f1f1f1",
                    boxSizing: "border-box", // Ensures proper sizing
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label>Mobile Number:</label>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "5px",
                    background: "#f1f1f1",
                    boxSizing: "border-box", // Ensures proper sizing
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              <div style={{ flex: 1 }}>
                <label>Address:</label>
                <input
                  type="text"
                  placeholder="Address"
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "5px",
                    background: "#f1f1f1",
                    boxSizing: "border-box", // Ensures proper sizing
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label>Date of Appointment:</label>
                <input
                  type="date"
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "5px",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <label>Gender:</label>
              <div>
                <label>
                  <input type="radio" name="gender" defaultChecked /> Male
                </label>
                <label style={{ marginLeft: "10px" }}>
                  <input type="radio" name="gender" /> Female
                </label>
              </div>
            </div>
          </div>

          {/* Payment Details Section */}
          <div
            className="payment-section"
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h4>Payment Details</h4>
            <hr />
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <p>{item.name}</p>
                <p>₹{item.price}</p>
              </div>
            ))}
            <hr />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <strong>Total Amount</strong>
              <strong>₹{calculateTotal()}</strong>
            </div>

            {/* Back Button */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                onClick={handleBackToCart}
                style={{
                  padding: "10px 20px",
                  background: "#FF5733",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                Back to Cart
              </button>

              <button
                onClick={handleOpenPaymentModal}
                style={{
                  padding: "10px 20px",
                  background: "#007BFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Payment Mode
              </button>
            </div>
          </div>
        </div>
        {/* Payment Modal */}
        {showPaymentModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: "10px",
                width: "400px",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h3>Payment Form</h3>
              <form>
                <input
                  type="text"
                  placeholder="Card Number"
                  style={{
                    width: "100%",
                    padding: "10px",
                    margin: "10px 0",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  style={{
                    width: "100%",
                    padding: "10px",
                    margin: "10px 0",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
                <input
                  type="date"
                  placeholder="Expiry Date"
                  style={{
                    width: "100%",
                    padding: "10px",
                    margin: "10px 0",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
                <input
                  type="text"
                  placeholder="CVV"
                  style={{
                    width: "100%",
                    padding: "10px",
                    margin: "10px 0",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
                <div>
                  <button
                    type="button"
                    onClick={handleClosePaymentModal}
                    style={{
                      padding: "10px 20px",
                      background: "#f44336",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{
                      padding: "10px 20px",
                      background: "#4CAF50",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Pay
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="cart-container"
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        background: "#f9f9f9",
        minHeight: "100vh",
        paddingTop: "20vh",
        position: "relative", //remove later
      }}
    >
      <h3>Your Cart</h3>
      <div
        className="cart-items-section"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {/* Cart Items Section */}
        <div
          style={{
            flex: 2,
            background: "#fff",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="cart-main2">
            <div className="cart-box1">
              <h4>Cart Items</h4>
            </div>

        {/* Search Bar */}
            <div className="cart-search-box">
              <input
                type="text"
                placeholder="Search product here..."
                className="cart-search-bar"
                value={searchQuery}
                onChange={handleSearch}
              />
              <button className="cart-search-icon">
                <GrSearch />
              </button>
            </div>
          </div>

          <hr />
          <div>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                  alignItems: "center",
                }}
              >
                <div>
                  <h6 style={{ marginBottom: "5px" }}>{item.name}</h6>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    style={{
                      color: "red",
                      border: "none",
                      fontWeight: "bold",
                      padding: "3px 10px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
                <div style={{ fontWeight: "bold" }}>
                  ₹{(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
                
            ))
            ) : (
              <p>No items match your search.</p>
            )}

          </div>
          {cartItems.length === 0 && <p>No items in the cart</p>}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={handleAddMoreTest}
              style={{
                padding: "10px 20px",
                background: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
                background: "linear-gradient(90deg, #603c86, #d06601)",
              }}
            >
              Add Test +
            </button>
            <button
              onClick={() => setShowMemberDetails(true)}
              style={{
                padding: "10px 20px",
                background: "#eb7801",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Payment Details Section */}
      <div
        className="payment-details-section"
        style={{
          flex: 1,
          background: "#fff",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h4>Payment Details</h4>
        <hr />
        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <p>{item.name}</p>
            <p>₹{item.price}</p>
          </div>
        ))}
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <strong>Total Amount</strong>
          <strong>₹{calculateTotal()}</strong>
        </div>
      </div>
    </div>
  );
};

export default Cart;
