import React, { useState, useEffect, useRef } from "react";
import * as XLSX from "xlsx";
import "./ExpertServiceList.css";

const initialTestParameters = [
  "Random blood sugar",
  "Serum creatinine",
  "TSH",
  "Complete Blood Count",
  "Complete Urine Routine",
  "S. Bilirubin",
  "EEG",
];

const ExpertServiceList = () => {
  const [formData, setFormData] = useState({
    expertSerialTestNo: "",
    testNo: "",
    testName: "",
    oldPrice: "",
    discountPrice: "",
    discountPercent: "",
    howManyTest: "",
    reportTime: "",
    tagLine: "",
    description: "",
    selectedTests: [],
  });

  const [dateFilter, setDateFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [testParameters, setTestParameters] = useState(initialTestParameters);
  const [newTestParameter, setNewTestParameter] = useState("");
  const [expertPackageList, setExpertPackageList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const formRef = useRef(null);

  // Fetch data from backend when component mounts
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
        setExpertPackageList(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Handle checkbox change
  const handleCheckboxChange = (test) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedTests: prevData.selectedTests.includes(test)
        ? prevData.selectedTests.filter((t) => t !== test)
        : [...prevData.selectedTests, test],
    }));
  };

  // Handle new test parameter addition
  const handleAddTestParameter = () => {
    if (newTestParameter && !testParameters.includes(newTestParameter)) {
      setTestParameters([...testParameters, newTestParameter]);
      setNewTestParameter("");
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      const url =
        editIndex !== null
          ? `http://localhost:4000/api/expertServiceLists/${expertPackageList[editIndex]._id}`
          : "http://localhost:4000/api/expertServiceLists";

      const method = editIndex !== null ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const data = await response.json();
      alert(
        editIndex !== null
          ? "Data updated successfully!"
          : "Data submitted successfully!"
      );

      if (editIndex !== null) {
        const updatedPackages = [...expertPackageList];
        updatedPackages[editIndex] = data.data;
        setExpertPackageList(updatedPackages);
        setEditIndex(null);
      } else {
        setExpertPackageList([...expertPackageList, data.data]);
      }

      // Reset form data
      setFormData({
        expertSerialTestNo: "",
        testNo: "",
        testName: "",
        oldPrice: "",
        discountPrice: "",
        discountPercent: "",
        howManyTest: "",
        reportTime: "",
        tagLine: "",
        description: "",
        selectedTests: [],
      });
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data");
    }
  };

  // Handle edit
  const handleEdit = (index) => {
    const selectedRow = expertPackageList[index];
    setFormData({
      expertSerialTestNo: selectedRow.expertSerialTestNo,
      testNo: selectedRow.testNo,
      testName: selectedRow.testName,
      oldPrice: selectedRow.oldPrice,
      discountPrice: selectedRow.discountPrice,
      discountPercent: selectedRow.discountPercent,
      howManyTest: selectedRow.howManyTest,
      reportTime: selectedRow.reportTime,
      tagLine: selectedRow.tagLine,
      description: selectedRow.description,
      selectedTests: selectedRow.selectedTests,
    });
    setEditIndex(index);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/expertServiceLists/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete data");
      }

      setExpertPackageList(expertPackageList.filter((item) => item._id !== id));
      alert("Data deleted successfully!");
    } catch (error) {
      console.error("Error deleting data:", error);
      alert("Failed to delete data");
    }
  };

  // Handle date filter change
  const handleDateFilterChange = (e) => {
    setDateFilter(e.target.value);
  };

  // Handle search query change
  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Export to Excel functionality
  const handleExportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(expertPackageList);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "ExpertServiceLists");
    XLSX.writeFile(wb, "expertServiceLists.xlsx");
  };

  return (
    <div className="expertservice-main1">
      <div className="expertservice-box1" ref={formRef}>
        <h1 className="expertservice-titles">Expert Package List Form</h1>
        <div className="expertservice-input-box1">
          {/* Form fields */}
          <div className="expertservice-input-row">
            <div className="expertservice-input-group">
              <label>Expert Serial Test No:</label>
              <input
                name="expertSerialTestNo"
                className="expertservice-input-section"
                type="text"
                value={formData.expertSerialTestNo}
                onChange={handleInputChange}
                placeholder="Enter Expert Serial Test No"
              />
            </div>
            <div className="expertservice-input-group">
              <label>Test No:</label>
              <input
                name="testNo"
                className="expertservice-input-section"
                type="text"
                value={formData.testNo}
                onChange={handleInputChange}
                placeholder="Enter Test No"
              />
            </div>
          </div>

          <div className="expertservice-input-row">
            <div className="expertservice-input-group">
              <label>Test Name:</label>
              <input
                name="testName"
                className="expertservice-input-section"
                type="text"
                value={formData.testName}
                onChange={handleInputChange}
                placeholder="Enter Test Name"
              />
            </div>
          </div>

          <div className="expertservice-input-row">
            <div className="expertservice-input-group">
              <label>Old Price:</label>
              <input
                name="oldPrice"
                className="expertservice-input-section"
                type="number"
                value={formData.oldPrice}
                onChange={handleInputChange}
                placeholder="Enter Old Price"
              />
            </div>
            <div className="expertservice-input-group">
              <label>Discount Price:</label>
              <input
                name="discountPrice"
                className="expertservice-input-section"
                type="number"
                value={formData.discountPrice}
                onChange={handleInputChange}
                placeholder="Enter Discount Price"
              />
            </div>
          </div>

          <div className="expertservice-input-row">
            <div className="expertservice-input-group">
              <label>Discount Percent:</label>
              <input
                name="discountPercent"
                className="expertservice-input-section"
                type="number"
                value={formData.discountPercent}
                onChange={handleInputChange}
                placeholder="Enter Discount Percent"
              />
            </div>
            <div className="expertservice-input-group">
              <label>How Many Test:</label>
              <input
                name="howManyTest"
                className="expertservice-input-section"
                type="number"
                value={formData.howManyTest}
                onChange={handleInputChange}
                placeholder="Enter How Many Test"
              />
            </div>
          </div>

          <div className="expertservice-input-row">
            <div className="expertservice-input-group">
              <label>Report Time:</label>
              <input
                name="reportTime"
                className="expertservice-input-section"
                type="number"
                value={formData.reportTime}
                onChange={handleInputChange}
                placeholder="Enter Report Time"
              />
            </div>
          </div>

          <div className="expertservice-input-row">
            <div className="expertservice-input-group">
              <label>Tag Line:</label>
              <input
                name="tagLine"
                className="expertservice-input-section"
                type="text"
                value={formData.tagLine}
                onChange={handleInputChange}
                placeholder="Enter Tag Line"
              />
            </div>
          </div>

          <div className="expertservice-input-row">
            <div className="expertservice-input-group">
              <label>Description:</label>
              <input
                name="description"
                className="expertservice-input-section"
                type="text"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter Description"
              />
            </div>
          </div>

          {/* Test Parameters Section */}
          <label>Test Parameters:</label>
          <div className="expertservice-test-parameters">
            {testParameters.map((test, index) => (
              <div key={index} className="expertservice-checkbox-group">
                <input
                  type="checkbox"
                  id={`test-${index}`}
                  checked={formData.selectedTests.includes(test)}
                  onChange={() => handleCheckboxChange(test)}
                />
                <label htmlFor={`test-${index}`}>{test}</label>
              </div>
            ))}
            <div className="expertservice-add-test-parameter">
              <input
                type="text"
                value={newTestParameter}
                onChange={(e) => setNewTestParameter(e.target.value)}
                placeholder="Add new test"
              />
              <button onClick={handleAddTestParameter}>+ Add</button>
            </div>
          </div>

          <div className="expertservice-submit-container">
            <button
              className="expertservice-submit-button"
              onClick={handleSubmit}
            >
              {editIndex !== null ? "Update" : "Submit"}
            </button>
          </div>
        </div>
      </div>

      <div className="expertservice-box2">
        <div className="expertservice-fetch-container">
          <div className="expertservice-fetch-title">Expert Package List</div>

          <div className="expertservice-filter-container">
            <input
              type="date"
              id="dateFilter"
              value={dateFilter}
              onChange={handleDateFilterChange}
              className="expertservice-date-filter"
            />
          </div>

          <div className="expertservice-search-container">
            <input
              type="text"
              placeholder="Search by Name"
              value={searchQuery}
              onChange={handleSearchQueryChange}
              className="expertservice-search-input"
            />

            <button
              className="expertservice-excel-button"
              onClick={handleExportToExcel}
            >
              Export to Excel
            </button>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="error-message">{error}</p>
          ) : (
            <table className="expertservice-fetch-table">
              <thead>
                <tr>
                  <th>Expert Serial No</th>
                  <th>Test No</th>
                  <th>Test Name</th>
                  <th>Old Price</th>
                  <th>Discount Price</th>
                  <th>Discount Percent</th>
                  <th>How Many Test</th>
                  <th>Report Time</th>
                  <th>Tag Line</th>
                  <th>Description</th>
                  <th>Tests parameter</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {expertPackageList.map((expertPackageInput, index) => (
                  <tr key={index}>
                    <td>{expertPackageInput.expertSerialTestNo}</td>
                    <td>{expertPackageInput.testNo}</td>
                    <td>{expertPackageInput.testName}</td>
                    <td>{expertPackageInput.oldPrice}</td>
                    <td>{expertPackageInput.discountPrice}</td>
                    <td>{expertPackageInput.discountPercent}</td>
                    <td>{expertPackageInput.howManyTest}</td>
                    <td>{expertPackageInput.reportTime}</td>
                    <td>{expertPackageInput.tagLine}</td>
                    <td>{expertPackageInput.description}</td>
                    <td>{expertPackageInput.selectedTests.join(", ")}</td>
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
                          onClick={() => handleDelete(expertPackageInput._id)}
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

export default ExpertServiceList;
