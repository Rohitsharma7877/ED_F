import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import "./Cart2.css";

const Cart2 = () => {
  const { cart, fetchCart } = useCart(); // ✅ First, declare cart
  const { token } = useAuth();

  // ✅ Then use it
  console.log("🛒 Rendered Cart in Cart2:", cart);

  useEffect(() => {
    if (token) {
      fetchCart();
      console.log("🛒 Cart in Cart2:", cart);
    }
  }, [token, fetchCart]);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      if (!item.testId) return total;
      return total + item.testId.oldPrice * item.quantity;
    }, 0);
  };

  return (
    <div className="cart-container">
      <h2>Your Basket</h2>
      <div className="cart-wrapper">
        {/* Cart Items */}
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart
              .filter((item) => item.testId)
              .map((item) => (
                <div className="cart-card" key={item._id}>
                  <img
                    src={
                      item.testId.image
                        ? `http://localhost:4000/uploads/${item.testId.image}`
                        : "/default-test-image.jpg"
                    }
                    alt={item.testId.title}
                    className="cart-image"
                  />
                  <div className="cart-info">
                    <h3>{item.testId.title}</h3>
                    <p>
                      Delivery:{" "}
                      {item.testId.homeCollection
                        ? "Home Collection"
                        : "Lab Visit"}
                    </p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ₹{item.testId.oldPrice * item.quantity}</p>
                  </div>
                </div>
              ))
          )}
        </div>

        {/* Summary Section */}
        <div className="cart-summary">
          <h3>Summary</h3>
          <p>Subtotal: ₹{getTotalPrice()}</p>
          <p>Delivery: Free</p>
          <hr />
          <p className="total-price">Total: ₹{getTotalPrice()}</p>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart2;
