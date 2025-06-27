import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import "./Cart2.css";

const Cart2 = () => {
  const { cart, fetchCart } = useCart();
  const { token } = useAuth();

  // Debugging logs
  console.log("🛒 Current Cart Data:", cart);

  useEffect(() => {
    if (token) {
      fetchCart();
    }
  }, [token, fetchCart]);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      if (!item.subCategoryId) return total;
      return total + (item.subCategoryId.oldPrice || 0) * (item.quantity || 1);
    }, 0);
  };

  // Handle empty cart state
  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your Basket</h2>
        <div className="empty-cart-message">
          <p>Your cart is empty</p>
          <button 
            className="continue-shopping-btn"
            onClick={() => window.location.href = '/'}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Basket</h2>
      <div className="cart-wrapper">
        {/* Cart Items */}
        <div className="cart-items">
          {cart
            .filter((item) => item.subCategoryId) // Only show items with valid subCategoryId
            .map((item) => (
              <div className="cart-card" key={item._id}>
                <img
                  src={
                    item.subCategoryId.image
                      ? `http://localhost:4000/uploads/${item.subCategoryId.image}`
                      : "/default-test-image.jpg"
                  }
                  alt={item.subCategoryId.title}
                  className="cart-image"
                  onError={(e) => {
                    e.target.src = "/default-test-image.jpg"; // Fallback image
                  }}
                />
                <div className="cart-info">
                  <h3>{item.subCategoryId.title || "Test"}</h3>
                  <p>
                    Delivery:{" "}
                    {item.subCategoryId.homeCollection
                      ? "Home Collection"
                      : "Lab Visit"}
                  </p>
                  <p>Quantity: {item.quantity || 1}</p>
                  <p>
                    Price: ₹
                    {(item.subCategoryId.oldPrice || 0) * (item.quantity || 1)}
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* Summary Section */}
        <div className="cart-summary">
          <h3>Summary</h3>
          <p>Subtotal: ₹{getTotalPrice()}</p>
          <p>Delivery: Free</p>
          <hr />
          <p className="total-price">Total: ₹{getTotalPrice()}</p>
          <button 
            className="checkout-btn"
            onClick={() => {
              // Add your checkout logic here
              console.log("Proceeding to checkout");
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart2;