import React, { useState, useEffect, useRef } from "react";
import "./Category.css";
import * as XLSX from "xlsx";

const Category = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [testNo, setTestNo] = useState("");
  const [categories, setCategories] = useState([
    "Lab Tests",
    "Radiology Tests",
    "Special Tests",
    "Expert care Package",
  ]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const formRef = useRef(null);

  // Fetch all categories from the backend when the component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  // Fetch all categories from the backend
  const fetchCategories = async () => {
    try {
      const response = await fetch("https://ed-b.onrender.com/api/categories");
      const data = await response.json();
      if (response.ok) {
        setCategoriesList(data.data);
      } else {
        setError("Failed to fetch categories");
      }
    } catch (err) {
      setError("Failed to fetch categories");
    }
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage({ file, preview: imageUrl });
    }
  };

  // Add a new category to the dropdown
  const handleAddCategory = () => {
    if (newCategory.trim() !== "" && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !category || !testNo) {
      alert("Please fill all fields before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("testNo", testNo);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    if (image?.file) {
      formData.append("image", image.file);
    }

    try {
      const url = editIndex !== null
        ? `https://ed-b.onrender.com/api/categories/${categoriesList[editIndex]._id}`
        : "https://ed-b.onrender.com/api/categories";

      const method = editIndex !== null ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert(editIndex !== null ? "Category updated successfully!" : "Category created successfully!");
        fetchCategories(); // Refresh the list
        resetForm();
      } else {
        alert(data.error || "Failed to submit category");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit category");
    }
  };

  // Handle edit action
  const handleEdit = (index) => {
    const selectedRow = categoriesList[index];
    setTestNo(selectedRow.testNo);
    setTitle(selectedRow.title);
    setDescription(selectedRow.description);
    setCategory(selectedRow.category);
    setImage({ preview: selectedRow.image ? `https://ed-b.onrender.com/uploads/${selectedRow.image}` : null });
    setEditIndex(index);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Handle delete action
  const handleDelete = async (index) => {
    const categoryId = categoriesList[index]._id;
    try {
      const response = await fetch(`https://ed-b.onrender.com/api/categories/${categoryId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Category deleted successfully!");
        fetchCategories(); // Refresh the list
      } else {
        alert("Failed to delete category");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to delete category");
    }
  };

  // Reset form fields
  const resetForm = () => {
    setImage(null);
    setTitle("");
    setDescription("");
    setCategory("");
    setNewCategory("");
    setTestNo("");
    setEditIndex(null);
  };

  // Handle search query change
  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle date filter change
  const handleDateFilterChange = (e) => {
    setDateFilter(e.target.value);
  };

  // Export to Excel
  const handleExportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(categoriesList);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Categories");
    XLSX.writeFile(wb, "categories.xlsx");
  };

  return (
    <div className="ServiceList-main1">
      <div className="service-list-box1" ref={formRef}>
        <h1 className="service-titles">Category List Form</h1>

        <div className="service-input-box1">
          {/* Test No Input Field */}
          <div className="service-input-row">
            <div className="service-input-group">
              <label>Test No:</label>
              <input
                name="testNo"
                className="service-input-section"
                type="text"
                value={testNo}
                onChange={(e) => setTestNo(e.target.value)}
                placeholder="Enter Test No"
              />
            </div>
          </div>

          {/* 1st Line: category select and add button */}
          <div className="service-input-row ">
            <div className="service-input-group">
              <label>Category:</label>
              <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="service-input-group">
              <label>Add Category:</label>
              <input
                name="addcategory"
                className="service-input-section"
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Enter new category"
              />
            </div>
            <div className="service-input-group">
              <label>Add Button:</label>
              <button className="add-button" onClick={handleAddCategory}>
                + Add
              </button>
            </div>
          </div>

          {/* 2nd Line: Upload Image & Title */}
          <div className="service-input-row ">
            <div className="service-input-group">
              <label>Upload Image:</label>
              <input
                name="uploadimage"
                className="service-input-section"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <div className="service-input-group">
              <label>Test Name:</label>
              <input
                name="title"
                className="service-input-section"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Test Name:"
              />
            </div>
          </div>

          {/* 3rd Line: Description */}
          <div className="service-input-group">
            <div className="service-input-row ">
              <label>Description:</label>
              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
              ></textarea>
            </div>
          </div>

          {/* Last Line: Submit Button (Aligned to Right) */}
          <div className=" submit-container">
            <button className="submit-button" onClick={handleSubmit}>
              {editIndex !== null ? "Update" : "Submit"}
            </button>
          </div>
        </div>
      </div>
      <div className="ServiceList-box2">
        <div className="ServiceList-fetch-container">
          <div className="ServiceList-fetch-title">Categories List</div>

          {/* Date Filter */}
          <div className="ServiceList-filter-container">
            <input
              type="date"
              id="dateFilter"
              value={dateFilter}
              onChange={handleDateFilterChange}
              className="date-filter"
            />
          </div>

          {/* Search and Export Button in Right Side */}
          <div className="ServiceList-search-container">
            <input
              type="text"
              placeholder="Search by Name"
              value={searchQuery}
              onChange={handleSearchQueryChange}
              className="search-input"
            />

            <button className="excel-button" onClick={handleExportToExcel}>
              Export to Excel
            </button>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <table className="ServiceList-fetch-table">
              <thead>
                <tr>
                  <th>Test No</th>
                  <th>Image</th>
                  <th>Category</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categoriesList.map((categoriesinput, index) => (
                  <tr key={index}>
                    <td>{categoriesinput.testNo}</td>
                    <td>
                      {categoriesinput.image ? (
                        <img
                          src={`https://ed-b.onrender.com/uploads/${categoriesinput.image}`}
                          alt="Uploaded Preview"
                          className="category-image"
                        />
                      ) : (
                        "No image"
                      )}
                    </td>
                    <td>{categoriesinput.category}</td>
                    <td>{categoriesinput.title}</td>
                    <td>{categoriesinput.description}</td>
                    <td>
                      <div className="actions-container">
                        <button
                          className="edit-button"
                          onClick={() => handleEdit(index)}
                        >
                          Edit
                        </button>
                        <button
                          className="delete-button"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;