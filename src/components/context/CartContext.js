import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import useDebounce from "../../hooks/useDebounce";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { token } = useAuth();
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCart = useCallback(async () => {
  if (!token) {
    setCart([]);
    return;
  }

  setIsLoading(true);
  setError(null);
  try {
    const res = await axios.get("http://localhost:4000/person/cart", {
      headers: { Authorization: `Bearer ${token}` },
    });
    
    if (res.data?.success) {
      // Transform data to match frontend expectations
      const formattedCart = res.data.cart.map(item => ({
        ...item,
        subCategoryId: item.testId // Map testId to subCategoryId
      }));
      
      setCart(formattedCart);
    }
  } catch (err) {
    console.error("Failed to fetch cart", err);
    setError(err.response?.data?.error || "Failed to load cart");
    toast.error(err.response?.data?.error || "Failed to load cart");
  } finally {
    setIsLoading(false);
  }
}, [token]);

  const debouncedFetchCart = useDebounce(fetchCart, 300);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

const addToCart = async (testId, testName, isExpertPackage = false) => {
  setIsLoading(true);
  setError(null);

  try {
    console.log("🛒 Adding:", { testId, isExpertPackage });
    
    if (!token) {
      throw new Error("Please login to add items to cart");
    }

    const response = await axios.post(
      "http://localhost:4000/person/cart/add",
      { 
        testId,
        isExpertPackage 
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        timeout: 10000
      }
    );

    if (!response.data?.success) {
      throw new Error(response.data.error || "Failed to add to cart");
    }

    await fetchCart();
    return response.data;

  } catch (error) {
    let errorMessage = "Failed to add to cart";
    
    if (error.response) {
      errorMessage = error.response.data?.error || 
                   `Server error (${error.response.status})`;
    } else if (error.request) {
      errorMessage = "No response from server";
    } else {
      errorMessage = error.message;
    }

    console.error("❌ Cart error:", {
      error: errorMessage,
      details: error.config,
      stack: error.stack
    });

    setError(errorMessage);
    throw new Error(errorMessage);
  } finally {
    setIsLoading(false);
  }
};


  const removeFromCart = async (testId) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/person/cart/remove",
        { testId }, // ✅ Correct body
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        await debouncedFetchCart();
        toast.success("Item removed from cart");
      } else {
        throw new Error(response.data.error || "Failed to remove item");
      }
    } catch (err) {
      const errorMsg =
        err.response?.data?.error || "Failed to remove from cart";
      setError(errorMsg);
      toast.error(errorMsg);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        fetchCart: debouncedFetchCart,
        addToCart,
        removeFromCart,
        isLoading,
        error,
        clearError: () => setError(null),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};