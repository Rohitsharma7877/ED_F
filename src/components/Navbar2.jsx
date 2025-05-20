import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus, FaPhoneVolume } from "react-icons/fa6";
import { IoMdCloudDownload } from "react-icons/io";
// import { LuDot } from "react-icons/lu";
// import doctor from './assests/indianGroupDoctors.jpg'
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import "./navbar2.css";

const Navbar2 = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu); // Toggle submenu
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="navbar-container">
      <nav className="desktop-navbar ">
        <ul className="nav-links ">
          <li>
            <Link to="/patient-portal">Doctor Portal</Link>
          </li>

          <li className="dropdown">
            <Link to="/all-test">
              All Test <span className="down-icon">▼</span>
            </Link>
          </li>
        

          <li className="dropdown">
            <Link to="#">
              Radiology Test <span className="down-icon">▼</span>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/radiology-test/mri">MRI</Link>
              </li>
              <li>
                <Link to="/radiology-test/ct-scan">CT-Scan</Link>
              </li>
              <li>
                <Link to="/radiology-test/x-ray">X-Ray</Link>
              </li>
              <li>
                <Link to="/radiology-test/ultrasonography">
                  Ultrasonography
                </Link>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <Link to="#">
              Special Test <span className="down-icon">▼</span>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/special-test/tmt">TMT</Link>
              </li>

              <li>
                <Link to="/special-test/mri-mammography">MRI Mammography</Link>
              </li>
              <li>
                <Link to="/special-test/mammography">Mammography</Link>
              </li>
              <li>
                <Link to="/special-test/ecg">ECG</Link>
              </li>
              <li>
                <Link to="/special-test/bone-density-test">
                  Bone Density Test
                </Link>
              </li>

              <li>
                <Link to="/special-test/eeg">EEG</Link>
              </li>
              <li>
                <Link to="/special-test/pulmonary-function-test">
                  Pulmonary Function Test
                </Link>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <Link to="/health-package">
              Expert Care Package <span className="down-icon">▼</span>
            </Link>
            
          </li>

          {/* Download reports */}
          {/* <li>
            <Link to="/download-report" className="flex items-start gap-2">
              <IoMdCloudDownload className="text-[18px] " />
              <div className="text-left text-[#f0a500]">Download Report</div>
            </Link>
          </li> */}


          <li>
            <Link to="/mobile" className="flex items-start gap-2">
              <FaPhoneVolume className="text-[18px] " />
              <div className="text-left text-[#f0a500]">+91 0123456789</div>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Navbar for Mobile */}
      <nav className=" mobile-navbar">
        <button className="hamburger-icon" onClick={toggleSidebar}>
          <RxHamburgerMenu size={24} />
        </button>
      </nav>

      {/* Sidebar Drawer */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <button className="close-icon" onClick={closeSidebar}>
            <IoClose size={24} />
          </button>
          <ul className="sidebar-links">
            <li>
              <Link to="/patient-portal" onClick={closeSidebar}>
                Patient Portal
              </Link>
            </li>

            {/* Lab Test Menu */}
            <li>
              <div
                className="submenu-header"
                onClick={() => toggleSubmenu("labTest")}
              >
                <span>Lab Test</span>
                {openSubmenu === "labTest" ? (
                  <FaMinus className="submenu-icon" />
                ) : (
                  <FaPlus className="submenu-icon" />
                )}
              </div>
              {openSubmenu === "labTest" && (
                <ul className="slider-dropdown-menu">
                  <li>
                    <Link to="#" onClick={closeSidebar}>
                      Book Now
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <div
                className="submenu-header"
                onClick={() => toggleSubmenu("radiologyTest")}
              >
                <span>Radiology Test</span>
                {openSubmenu === "radiologyTest" ? (
                  <FaMinus className="submenu-icon" />
                ) : (
                  <FaPlus className="submenu-icon" />
                )}
              </div>
              {openSubmenu === "radiologyTest" && (
                <ul className="slider-dropdown-menu">
                  <li>
                    <Link to="/radiology-test/mri" onClick={closeSidebar}>
                      MRI
                    </Link>
                  </li>
                  <li>
                    <Link to="/radiology-test/ct-scan" onClick={closeSidebar}>
                      CT-Scan
                    </Link>
                  </li>
                  <li>
                    <Link to="/radiology-test/x-ray" onClick={closeSidebar}>
                      X-Ray
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/radiology-test/ultrasonography"
                      onClick={closeSidebar}
                    >
                      Ultrasonography
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <div
                className="submenu-header"
                onClick={() => toggleSubmenu("specialTest")}
              >
                <span>Special Test</span>
                {openSubmenu === "specialTest" ? (
                  <FaMinus className="submenu-icon" />
                ) : (
                  <FaPlus className="submenu-icon" />
                )}
              </div>
              {openSubmenu === "specialTest" && (
                <ul className="slider-dropdown-menu">
                  <li>
                    <Link to="/special-test/tmt" onClick={closeSidebar}>
                      TMT
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/special-test/mri-mammography"
                      onClick={closeSidebar}
                    >
                      MRI Mammography
                    </Link>
                  </li>
                  <li>
                    <Link to="/special-test/mammography" onClick={closeSidebar}>
                      Mammography
                    </Link>
                  </li>
                  <li>
                    <Link to="/special-test/ecg" onClick={closeSidebar}>
                      ECG
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/special-test/bone-density-test"
                      onClick={closeSidebar}
                    >
                      Bone Density Test
                    </Link>
                  </li>
                  <li>
                    <Link to="/special-test/eeg" onClick={closeSidebar}>
                      EEG
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/special-test/pulmonary-function-test"
                      onClick={closeSidebar}
                    >
                      Pulmonary Function Test
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/health-package" onClick={closeSidebar}>
                Expert Care Packages
              </Link>
            </li>

            {/* Download Report */}
            {/* <li>
              <Link to="/download-report" onClick={closeSidebar}>
                Download Report
              </Link>
            </li> */}
            <li>
              <Link to="/mobile" onClick={closeSidebar}>
                +91 0123456789
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </div>
  );
};

export default Navbar2;
