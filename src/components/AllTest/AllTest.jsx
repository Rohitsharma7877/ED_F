import React, { useState, useEffect } from "react";
import "./AllTest.css";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../context/CartContext";

const AllTest = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All Test");
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSubTestId, setSelectedSubTestId] = useState(null);
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const itemsPerPage = 8;
  const maxVisiblePages = 5;
  const navigate = useNavigate();
  const isShowingSubCategory = subCategoryData.length > 0;
  const { addToCart } = useCart();

  // Check if user is logged in (you'll need to implement your actual auth check)
  const isLoggedIn = () => {
    return localStorage.getItem("authToken") !== null;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const categoryResponse = await fetch(
          "http://localhost:4000/api/categories"
        );
        const categoryResult = await categoryResponse.json();
        console.log("Category API Response:", categoryResult);

        setCategories([
          "All Test",
          ...new Set(categoryResult.data.map((item) => item.category)),
        ]);
        setData(categoryResult.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    setExpandedCardId(null);
    setSelectedSubTestId(null); // ✅
    setSubCategoryData([]);
    setCurrentPage(1);
    try {
      const url =
        category === "All Test"
          ? "http://localhost:4000/api/categories"
          : `http://localhost:4000/api/categories?category=${category}`;
      const res = await fetch(url);
      const json = await res.json();
      setData(json.data);
    } catch (err) {
      console.error("Category fetch error:", err);
    }
  };

  const handleCardClick = async (card) => {
    setExpandedCardId(card._id);
    try {
      const res = await fetch(
        `http://localhost:4000/api/subcategories?category=${selectedCategory}&subCategory=${card.title}`
      );
      const json = await res.json();
      const filtered = json.data.filter(
        (item) => item.subCategory === card.title
      );

      // DEBUG: Log the returned test data
      console.log("Subcategory tests:", filtered);
      console.log("First test ID:", filtered[0]?._id);

      setSubCategoryData(filtered);
    } catch (err) {
      console.error("Subcategory fetch error:", err);
    }
  };

  const handleAddToCart = async (card) => {
    console.group("Add to Cart Debug");
    try {
      console.log("Selected Test:", card.title, "ID:", card._id);

      if (!isLoggedIn()) {
        toast.error("Please login to add tests");
        navigate("/log-in");
        return;
      }

      const { success, error } = await addToCart(card._id, card.title);

      if (success) {
        toast.success(`${card.title} added to cart!`);
      } else {
        toast.error(error || "Failed to add to cart");
        console.error("Error details:", error);
      }
    } catch (error) {
      console.error("Full error:", error);

      let userMessage = "Failed to add to cart";
      if (error.response?.error) {
        userMessage = error.response.error;
      } else if (error.message.includes("Network Error")) {
        userMessage = "Network connection failed";
      }

      toast.error(userMessage);
    } finally {
      console.groupEnd();
    }
  };

  const handleSuggestionClick = (title) => {
    setSearchQuery(title);
    setSuggestions([]);
  };

  useEffect(() => {
    if (searchQuery) {
      const sugg = data
        .filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((item) => item.title);
      setSuggestions(sugg);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery, data]);

  const filteredData = (data || []).filter((item) => {
    const matchesCategory =
      selectedCategory === "All Test" || item.category === selectedCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  // Pagination Logic
  const paginatedCards = expandedCardId ? subCategoryData : filteredData;

  const totalPages = Math.ceil(paginatedCards.length / itemsPerPage);
  const currentCards = paginatedCards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="alltest-wrapper">
      <div className="alltest-main1">
        <div className="alltest-box1">
          <ul className="categories-list">
            {categories.map((category, index) => (
              <li
                key={index}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="alltest-box2">
          <div className="alltest-search-bar">
            <input
              type="text"
              placeholder="Search tests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <i className="fas fa-search"></i>
            {suggestions.length > 0 && (
              <ul className="suggestion-list">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <h2 className="dashboard-heading">
            {expandedCardId
              ? data.find((d) => d._id === expandedCardId)?.title || "Sub Tests"
              : selectedCategory}
          </h2>

          <div className="card-grid">
            {currentCards.length > 0 ? (
              currentCards.map((card) => (
                <div
                  key={card._id}
                  className={`card ${
                    expandedCardId === card._id ? "expanded" : ""
                  }`}
                  onClick={() =>
                    expandedCardId === card._id ? null : handleCardClick(card)
                  }
                >
                  <img
                    src={
                      card.image
                        ? `http://localhost:4000/uploads/${card.image}`
                        : "default-image-url"
                    }
                    alt={card.title}
                    className="card-image"
                  />
                  <div className="card-content">
                    <h3>{card.title}</h3>
                    <p className="card-description">{card.description}</p>

                    {(isShowingSubCategory ||
                      expandedCardId === card._id ||
                      selectedSubTestId === card._id) && (
                      <>
                        <div className="card-price">
                          <span className="discounted-price">
                            <MdOutlineCurrencyRupee className="price-icon discount-icon" />
                            {card.oldPrice}/- Price
                          </span>
                        </div>
                        <div className="book-for">
                          <TiTick className="book-for-icon" />
                          <span className="book-for-text">
                            Home Collection: {card.homeCollection}
                          </span>
                        </div>
                        <div className="book-for-contras">
                          <span className="book-for-text-contras">
                            Contrast:
                            <MdOutlineCurrencyRupee className="price-icon-contras" />
                            {card.contrastPrice}
                          </span>
                        </div>
                      </>
                    )}

                    <div className="alltest-card">
                      <button
                        className="alltest-add-to-cart"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isShowingSubCategory || expandedCardId) {
                            handleAddToCart(card);
                          } else {
                            // If not logged in and trying to book test
                            if (!isLoggedIn()) {
                              toast.error("Please login to book tests");
                              navigate("/log-in");
                              return;
                            }
                            handleCardClick(card);
                          }
                        }}
                      >
                        {isShowingSubCategory || expandedCardId
                          ? "Add to Cart"
                          : "Book Test"}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No data available</p>
            )}
          </div>

          <div className="pagination">
            <button
              className="arrow-button"
              disabled={currentPage === 1}
              onClick={() => paginate(currentPage - 1)}
            >
              &lt;
            </button>

            <button
              className={`page-button ${currentPage === 1 ? "active" : ""}`}
              onClick={() => paginate(1)}
            >
              1
            </button>

            {currentPage > maxVisiblePages - 1 && (
              <span className="ellipsis">...</span>
            )}

            {(() => {
              let startPage = Math.max(
                2,
                currentPage - Math.floor(maxVisiblePages / 2)
              );
              let endPage = Math.min(
                totalPages - 1,
                startPage + maxVisiblePages - 1
              );

              if (endPage === totalPages - 1) {
                startPage = Math.max(2, endPage - maxVisiblePages + 1);
              }

              const pages = [];
              for (let i = startPage; i <= endPage; i++) {
                pages.push(
                  <button
                    key={i}
                    className={`page-button ${
                      currentPage === i ? "active" : ""
                    }`}
                    onClick={() => paginate(i)}
                  >
                    {i}
                  </button>
                );
              }
              return pages;
            })()}

            {currentPage < totalPages - (maxVisiblePages - 1) && (
              <span className="ellipsis">...</span>
            )}

            {totalPages > 1 && (
              <button
                className={`page-button ${
                  currentPage === totalPages ? "active" : ""
                }`}
                onClick={() => paginate(totalPages)}
              >
                {totalPages}
              </button>
            )}

            <button
              className="arrow-button"
              disabled={currentPage === totalPages}
              onClick={() => paginate(currentPage + 1)}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTest;
