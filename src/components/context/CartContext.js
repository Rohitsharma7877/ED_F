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
        setCart(res.data.cart);
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

const addToCart = async (testId, testName) => {
  setIsLoading(true);
  setError(null);

  // STEP 1: Log inputs
  console.log("📦 Sending addToCart request with testId:", testId);
  console.log("🛡️ Token being sent:", token);

  if (!testId) {
    toast.error("Invalid test ID. Cannot add to cart.");
    setIsLoading(false);
    return;
  }

  try {
  const response = await axios.post("http://localhost:4000/person/cart/add", { testId }, {
  headers: { Authorization: `Bearer ${token}` }
});

    // STEP 2: Log the response
    console.log("📩 Server responded:", response.data);

    if (response.data.success) {
      await fetchCart(); // cart will update
      toast.success(`${testName} added to cart successfully!`);
      return { success: true };
    } else {
      toast.error(response.data.error || "Failed to add to cart");
      return { success: false };
    }
  } catch (err) {
    console.log("❌ Error during addToCart:", err);
    toast.error("Something went wrong while adding to cart.");
    return { success: false };
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
