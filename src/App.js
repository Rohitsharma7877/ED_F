import "./App.css";
import { useLocation } from "react-router-dom";
import Routers from "./components/Routers";
import NavBarPage from "./components/pages/NavBarPage";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from './components/context/AuthContext';
function App() {
  const location = useLocation();

  // Define the routes where NavBarPage and Footer should not be displayed
  const noHeaderFooterRoutes = [
    "/admin-login",
    "/admin/dashboard",
    "/superadmin/dashboard",
  ];
  
  // Check if the current route matches any of the specified routes
  const hideHeaderFooter = noHeaderFooterRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <div className="App">
     <AuthProvider>
      {/* ToastContainer should be at the root level */}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      {!hideHeaderFooter && <NavBarPage />}
      <Routers />
      {!hideHeaderFooter && <Footer />}
      </AuthProvider>
    </div>
  );
}

export default App;