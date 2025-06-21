import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { token } = useAuth(); // Get token from AuthContext
  
  const fetchCart = async () => {
    try {
      const response = await axios.get("http://localhost:4000/person/cart", {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      setCart(response.data.cart);
    } catch (err) {
      console.error("Failed to fetch cart", err);
    }
  };
  
  const addToCart = async (testId) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/person/cart/add", 
        { testId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      await fetchCart(); // Refresh cart after adding
      return response.data;
    } catch (err) {
      console.error("Failed to add to cart", err);
      throw err;
    }
  };
  
  const removeFromCart = async (testId) => {
    try {
      await axios.post("http://localhost:4000/person/cart/remove", 
        { testId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await fetchCart(); // Refresh cart after removing
    } catch (err) {
      console.error("Failed to remove from cart", err);
      throw err;
    }
  };
  
  useEffect(() => {
    if (token) {
      fetchCart();
    }
  }, [token]);
  
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);