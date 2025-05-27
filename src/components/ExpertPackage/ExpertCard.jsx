import React, { useState, useEffect } from "react";
import "./ExpertCard.css";
import { useNavigate } from "react-router-dom";

const ITEMS_PER_PAGE = 8;

const ExpertCard = () => {
  const [packages, setPackages] = useState([]); // State to store fetched packages
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/expertServiceLists"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPackages(data.data); // Set fetched data
      } catch (error) {
        setError("Failed to fetch packages");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(packages.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentPackages = packages.slice(indexOfFirstItem, indexOfLastItem);

  // Navigate to details page
  const handleViewDetails = (id) => {
    navigate(`/package/${id}`);
  };

  // Pagination function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="expertCard-main">
      <h2 className="expertCard-title">Health Packages</h2>
      <p className="expertCard-subtitle">
        Showing {indexOfFirstItem + 1}-
        {Math.min(indexOfLastItem, packages.length)} of {packages.length}{" "}
        Packages
      </p>

      <div className="expertCard-container">
        {currentPackages.map((pkg) => (
          <div key={pkg.id} className="expertCard">
            <h3 className="expertCard-name">{pkg.testName}</h3>
            <p className="expertCard-price">
              <span className="original-price">₹{pkg.oldPrice}</span>{" "}
              <span className="expert-discounted-price">
                ₹{pkg.discountPrice}/-
              </span>
            </p>
            <p className="expertCard-discount">{pkg.discountPercent}%</p>
            <div className="expertCard-information">
              <p>
                🧪 <span style={{ color: "blue" }}>{pkg.howManyTest}</span> +
                tests parameters included
              </p>

              <p>
                ✅ Reports within{" "}
                <span style={{ color: "blue" }}>{pkg.reportTime}</span> Hours
              </p>
            </div>
            <div className="expertCard-buttons">
              <button
                className="view-details"
                onClick={() => handleViewDetails(pkg._id)}
              >
                View Details
              </button>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          className="arrow-button"
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
        >
          &lt;
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`page-button ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="arrow-button"
          disabled={currentPage === totalPages}
          onClick={() => paginate(currentPage + 1)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ExpertCard;
