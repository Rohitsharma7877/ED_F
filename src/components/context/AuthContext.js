import { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("authToken") || null);
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // ✅ Fetch user profile after login
  const fetchUserData = async (token) => {
    try {
      const response = await fetch("http://localhost:4000/person/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData)); // Save user in storage
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  // ✅ Sync token with localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem("authToken", token);
      fetchUserData(token);
    } else {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      setUser(null);
    }
  }, [token]);

  // ✅ Logout function
  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, setToken, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom Hook
export const useAuth = () => useContext(AuthContext);
