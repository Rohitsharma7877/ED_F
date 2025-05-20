import React, { useRef, useEffect } from "react";
import Header from "../Home/Header.jsx";
import DiagnosticService from "../Home/DiagnosticService.jsx";
import WhyChoose from "../Home/WhyChoose.jsx";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const diagnosticServiceRef = useRef(null);

  const showDiagnosticService = location.state?.showDiagnosticService || false;

  useEffect(() => {
    if (showDiagnosticService && diagnosticServiceRef.current) {
      diagnosticServiceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showDiagnosticService]);

  return (
    <div>
      <Header />
      <div ref={diagnosticServiceRef}>
        <DiagnosticService />
      </div>
      <WhyChoose />
    </div>
  );
};

export default HomePage;
