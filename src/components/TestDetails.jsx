import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./TestDetails.css";

const TestDetails = () => {
  const { id } = useParams();
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTestDetails = async () => {
      try {
        const response = await fetch(
          `https://ed-b-1.onrender.com/api/subcategories/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setTest(data.data);
        } else {
          setError("Failed to fetch test details");
        }
      } catch (err) {
        setError("Error fetching test details");
      } finally {
        setLoading(false);
      }
    };

    fetchTestDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!test) return <div>Test not found</div>;

  return (
    <div className="test-details-main1">
      <div className="test-details-main2">
        <div className="test-details-box1">
          <h1>{test.title}</h1>
        </div>
        <div className="test-details-container">
          <div className="test-details-box1">
            {test.image && (
              <img
                src={`https://ed-b-1.onrender.com/uploads/${test.image}`}
                alt={test.title}
                className="test-image"
              />
            )}
          </div>
          <div className="test-details-box2">
            <div className="detail-row description-row">
              <strong>Description:</strong>
              <span className="value-highlight description-text">
                {test.description}
              </span>
            </div>

            <div className="detail-row">
              <strong>Test Number:</strong>
              <span className="value-highlight">{test.testNo}</span>
            </div>

            <div className="detail-row">
              <strong>Serial Number:</strong>
              <span className="value-highlight">{test.expertSerialTestNo}</span>
            </div>

            <div className="detail-row-flex">
              <div>
                <strong>Category:</strong>
                <span className="value-highlight">{test.category}</span>
              </div>
              <div>
                <strong>Sub-Category:</strong>
                <span className="value-highlight">{test.subCategory}</span>
              </div>
            </div>

            <div className="price-book-row">
              <div className="price-info">
                <strong>Price:</strong>
                <span className="price-highlight">₹{test.discountedPrice}</span>
                {test.oldPrice && (
                  <span className="old-price">₹{test.oldPrice}</span>
                )}
              </div>

              <div>
                <button className="book-button">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDetails;
