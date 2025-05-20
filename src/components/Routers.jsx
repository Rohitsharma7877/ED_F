import React from "react";
import { Routes, Route } from "react-router-dom";
import DownloadReport from "./DownloadReport";
import HomePage from "./pages/HomePage";
import ContactUs from "./ContactUs";
import ECGPage from "./pages/ECGPage";
import DoctorPortal from "./DoctorPortal/DoctorPortal";
import BoneDensityPage from "./pages/BoneDensityPage";
import MammographyPage from "./pages/MammographyPage";
import TMTPage from "./pages/TMTPage";
import XRAYPage from "./pages/XRAYPage";
import CTScanPage from "./pages/CTScanPage";
import MRIPage from "./pages/MRIPage";
import UTSoundPage from "./pages/UTSoundPage";
import Mammography2Page from "./pages/Mammography2Page";
import EEGPage from "./pages/EEGPage";
import PulmonaryFunctionTestPage from "./pages/PulmonaryFunctionTestPage";
import UploadPrescription from "./UploadPrescription";
import AboutPage from "./pages/AboutPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import DownloadReportPage from "./pages/DownloadReportPage";
import HomeCollection from "./HomeCollection";
import BookAppointment from "./BookAppointment";
import PageDoesNot from "./PageDoesNot";
import ProtectedRoute from "./ProtectedRoute";

// Admin section routes
import AdminLogin from "./Registration/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard";
import ConfirmationList from "./Admin/ConfirmationList";
import BookingList from "./Admin/BookingList";
import ViewAppointments from "./Admin/ViewAppointments";
import ViewHomeCollection from "./Admin/ViewHomeCollection";
import RegistrationForm from "./Admin/RegistrationForm";
import FetchRegistrations from "./Admin/FetchRegistrations";
import AllTest from "./AllTest/AllTest";
import Category from "./Admin/Category";
import SubCategory from "./Admin/SubCategory";
import AmbulanceServices from "./AmbulanceServices";
import ExpertPackagePage from "./pages/ExpertPackagePage";
import ExpertPackageDetails from "./ExpertPackage/ExpertPackageDetails";
import ExpertServiceList from "./Admin/ExpertServiceList";
import UploadPrescriptionDashboard from "./Admin/UploadPrescriptionDashboard";
import ViewAmbulanceService from "./Admin/viewAmbulanceService";
import OfflineBooking from "./OfflineBooking";
import BookForServices from "./Admin/BookForServices";
import ViewContact from "./Admin/ViewContact";

const Routers = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/all-test" element={<AllTest />} />
      <Route path="/patient-portal" element={<DoctorPortal />} />
      <Route path="/upload-prescription" element={<UploadPrescription />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/log-in" element={<LoginPage />} />
      <Route path="/download-report" element={<DownloadReportPage />} />
      <Route path="/ambulance-service" element={<AmbulanceServices />} />
      <Route path="/home-collection" element={<HomeCollection />} />
      <Route path="/book-appointment" element={<BookAppointment />} />

      {/* Admin section*/}
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />}>
        <Route path="request-callback" element={<BookingList />} />
        <Route path="diagnostic" element={<ConfirmationList />} />
        <Route path="book-appointment" element={<ViewAppointments />} />
        <Route path="home-collection" element={<ViewHomeCollection />} />
        <Route path="ambulance-services" element={<ViewAmbulanceService />} />
        <Route path="admin-offline-registration" element={<RegistrationForm />} />
        <Route path="test-booking" element={<BookForServices />} />
        <Route
          path="upload-prescription"
          element={<UploadPrescriptionDashboard />}
        />
        <Route path="category" element={<Category />} />
        <Route path="view-contact-us" element={<ViewContact />} />
        <Route path="sub-category" element={<SubCategory />} />
        <Route path="expert-service-list" element={<ExpertServiceList />} />
        
        <Route
          path="admin-offline-registration/view-offline-registrations"
          element={<FetchRegistrations />}
        />{" "}
      </Route>

      {/* Radiology-test Routes  */}
      <Route path="/radiology-test/mri" element={<MRIPage />} />
      <Route path="/radiology-test/ct-scan" element={<CTScanPage />} />
      <Route path="/radiology-test/x-ray" element={<XRAYPage />} />
      <Route path="/radiology-test/ultrasonography" element={<UTSoundPage />} />
      <Route path="/special-test/tmt" element={<TMTPage />} />
      <Route
        path="/special-test/mri-mammography"
        element={<MammographyPage />}
      />
      <Route path="/special-test/mammography" element={<Mammography2Page />} />
      <Route path="/special-test/ecg" element={<ECGPage />} />
      <Route
        path="/special-test/bone-density-test"
        element={<BoneDensityPage />}
      />
      <Route path="/special-test/eeg" element={<EEGPage />} />
      <Route
        path="/special-test/pulmonary-function-test"
        element={<PulmonaryFunctionTestPage />}
      />
      <Route path="/health-package" element={<ExpertPackagePage />} />
      <Route path="/package/:id" element={<ExpertPackageDetails />} />
      <Route path="/about" element={<AboutPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/download-report" element={<DownloadReport />} />
        {/* Add other protected routes here */}
      </Route>

      <Route path="/offline-booking" element={<OfflineBooking />} />
      
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="*" element={<PageDoesNot />} />
    </Routes>
  );
};

export default Routers;
