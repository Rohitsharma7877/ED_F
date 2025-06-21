import React, { useState, useEffect } from "react";
import "./AllTest.css";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const AllTest = () => {
  const [data, setData] = useState([]); // All test data from backend
  const [categories, setCategories] = useState([]); // Categories list
  const [currentPage, setCurrentPage] = useState(1); // Pagination
  const [loading, setLoading] = useState(true); // Loading state
  const [selectedCategory, setSelectedCategory] = useState("All Test"); // Selected category
  const [searchQuery, setSearchQuery] = useState(""); // Search bar input
  const [suggestions, setSuggestions] = useState([]); // Search suggestions
  const [selectedCard, setSelectedCard] = useState(null); // Selected card
  const [subCategoryData, setSubCategoryData] = useState([]); // Subcategory data
  const itemsPerPage = 8; // Number of cards per page
  const maxVisiblePages=5;

  
  // Fetch categories from API on page load
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
        setData(categoryResult.data); // Store test data
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fetch subcategory data when a category is clicked
  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    setSelectedCard(null); // Reset selected card when switching category
    setSubCategoryData([]); // ✅ Clear subcategory data on category switch
    setCurrentPage(1);

    try {
      if (category === "All Test") {
        const response = await fetch("http://localhost:4000/api/categories");
        const result = await response.json();
        setData(result.data);
      } else {
        const response = await fetch(
          `http://localhost:4000/api/categories?category=${category}`
        );
        const result = await response.json();
        setData(result.data); // ✅ Store only category data
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Fetch detailed test data when clicking on a test card
  const handleCardClick = async (card) => {
    setSelectedCard(card);

    try {
      const response = await fetch(
        `http://localhost:4000/api/subcategories?category=${selectedCategory}&subCategory=${card.title}`
      );
      const result = await response.json();

      console.log("Detailed Test Data:", result);

      // ✅ Filter only the subcategory data related to the clicked card
      const filteredSubcategoryData = result.data.filter(
        (item) => item.subCategory === card.title
      );

      setSubCategoryData(filteredSubcategoryData); // Store only relevant data
    } catch (error) {
      console.error("Error fetching test details:", error);
    }
  };

  // Update this section to fix search functionality
  const filteredData = (data || []).filter((item) => {
    const matchesCategory =
      selectedCategory === "All Test" || item.category === selectedCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase()); // Case-insensitive search on title
    return matchesCategory && matchesSearch; // Filtering by category & title
  });

  // Update this section to fix search suggestions
  useEffect(() => {
    if (searchQuery) {
      const newSuggestions = (data || [])
        .filter(
          (item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()) // Case-insensitive title search
        )
        .map((item) => item.title);
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery, data]);

  const handleSuggestionClick = (title) => {
    setSearchQuery(title);
    setSuggestions([]);
  };

  // Pagination Logic
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentCards = selectedCard
    ? subCategoryData.slice(firstIndex, lastIndex)
    : filteredData.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(
    (selectedCard ? subCategoryData.length : filteredData.length) / itemsPerPage
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle Add to Cart
  const handleAddToCart = (card) => {
    console.log("Added to cart:", card);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="alltest-wrapper">
      <div className="alltest-main1">
        {/* Left Side: Categories List */}
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

        {/* Right Side: Search Bar, Heading, and Cards */}
        <div className="alltest-box2">
          {/* Search Bar */}
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

          {/* Heading */}
          <h2 className="dashboard-heading">
            {selectedCard ? selectedCard.title : selectedCategory}
          </h2>

          {/* Cards Grid */}
          <div className="card-grid">
            {currentCards.length > 0 ? (
              currentCards.map((card) => (
                <div
                  className="card"
                  key={card._id}
                  onClick={() => !selectedCard && handleCardClick(card)}
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

                    {/* Show description in both views */}
                    <p className="card-description">{card.description}</p>

                    {selectedCard && (
                      <>
                        <div className="card-price">
                          {/* <span className="original-price">
                            <MdOutlineCurrencyRupee className="price-icon" />
                            {card.oldPrice}/- Price
                          </span> */}
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
                          {/* <TiTick className="book-for-icon-contras" /> */}
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
                        onClick={() => handleAddToCart(card)}
                      >
                        {selectedCard ? "Add to Cart" : "Book Test"}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No data available</p>
            )}
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

  {/* Always show first page */}
  <button
    className={`page-button ${currentPage === 1 ? "active" : ""}`}
    onClick={() => paginate(1)}
  >
    1
  </button>

  {/* Show ellipsis if needed before middle pages */}
  {currentPage > maxVisiblePages - 1 && <span className="ellipsis">...</span>}

  {/* Calculate middle pages to show */}
  {(() => {
    let startPage = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 1);
    
    // Adjust if we're near the end
    if (endPage === totalPages - 1) {
      startPage = Math.max(2, endPage - maxVisiblePages + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`page-button ${currentPage === i ? "active" : ""}`}
          onClick={() => paginate(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  })()}

  {/* Show ellipsis if needed after middle pages */}
  {currentPage < totalPages - (maxVisiblePages - 1) && <span className="ellipsis">...</span>}

  {/* Always show last page if there's more than 1 page */}
  {totalPages > 1 && (
    <button
      className={`page-button ${currentPage === totalPages ? "active" : ""}`}
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
