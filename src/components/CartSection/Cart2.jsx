import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import "./Cart2.css";
import { FaTimes } from "react-icons/fa";

const Cart2 = () => {
  const { cart, fetchCart, removeFromCart } = useCart();
  const { token } = useAuth();
  const [showPayment, setShowPayment] = useState(false); // State for payment modal

  useEffect(() => {
    if (token) {
      fetchCart();
    }
  }, [token, fetchCart]);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const testData = item.subCategoryId || item.testId;
      if (!testData) return total;
      return total + (testData.oldPrice || 0) * (item.quantity || 1);
    }, 0);
  };

  const handleCheckout = () => {
    setShowPayment(true);
  };

  const closePayment = () => {
    setShowPayment(false);
  };

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
        <div className="cart-items">
          {cart
            .filter(item => item.subCategoryId || item.testId)
            .map((item) => {
              const testData = item.subCategoryId || item.testId;
              return (
                <div className="cart-card" key={item._id || testData._id}>
                  <img
                    src={
                      testData.image
                        ? `http://localhost:4000/uploads/${testData.image}`
                        : "/default-test-image.jpg"
                    }
                    alt={testData.title}
                    className="cart-image"
                    onError={(e) => {
                      e.target.src = "/default-test-image.jpg";
                    }}
                  />
                  <div className="cart-info">
                    <h3>{testData.title || "Test"}</h3>
                    <p>
                      Price: ₹
                      {(testData.oldPrice || 0) * (item.quantity || 1)}
                    </p>
                  </div>
                  <button 
                    className="remove-item-btn"
                    onClick={() => removeFromCart(testData._id)}
                  >
                    <FaTimes />
                  </button>
                </div>
              );
            })}
        </div>

        <div className="cart-summary">
          <h3>Summary</h3>
          <p>Subtotal: ₹{getTotalPrice()}</p>
          <p>Delivery: Free</p>
          <hr />
          <p className="total-price">Total: ₹{getTotalPrice()}</p>
          <button 
            className="checkout-btn"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Payment Overlay */}
      {showPayment && (
  <div className="payment-overlay">
    <div className="payment-modal">
      <button className="close-payment" onClick={closePayment}>
        <FaTimes />
      </button>
      <h3>Payment Information</h3>
      <div className="payment-message">
        <p className="main-message">When you visit the centre that time you pay</p>
        <p className="sub-message">Sorry for the inconvenience, our team is working on the payment section</p>
      </div>
      <button 
        className="continue-btn"
        onClick={closePayment}
      >
        Continue
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default Cart2;