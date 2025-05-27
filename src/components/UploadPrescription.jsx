import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./UploadPrescription.css";
import uploadPrcpt from './assests/uploadPrcptn.png'

const UploadPrescription = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    // pincode: "",
  });

  const [uploadedFile, setUploadedFile] = useState(null);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // File Dropzone
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png, application/pdf",
    onDrop: (acceptedFiles) => {
      setUploadedFile(acceptedFiles[0]);
    },
  });

  // Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if the uploaded file and all form fields are filled
    if (formData.name && formData.mobile && uploadedFile) {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("mobile", formData.mobile);
      formDataToSend.append("file", uploadedFile);
      formDataToSend.append("uploadDate", new Date().toISOString()); // Add current date
  
      try {
        const response = await fetch("http://localhost:4000/api/prescriptions", {
          method: "POST",
          body: formDataToSend,
        });
  
        if (response.ok) {
          alert("Upload Prescription is successful!");
          setFormData({
            name: "",
            mobile: "",
          });
          setUploadedFile(null);
        } else {
          alert("Failed to upload prescription.");
        }
      } catch (err) {
        console.error("Error uploading prescription:", err);
        alert("Failed to upload prescription.");
      }
    } else {
      alert("Please fill all fields and upload a file before submitting.");
    }
  };

  return (
    <div className="upload-prescription-main">
      <div className="upload-prescription-container">
        {/* Left Side - Image */}
        <div className="image-container">
          <img src={uploadPrcpt} alt="Prescription Illustration" />
        </div>

        {/* Right Side - Form */}
        <div className="form-container">
          <h2 className="heading">Upload - Prescription</h2>
          <p className="subheading">
           Save time, stay private & access 24/7 with our streamlined process.
          </p>

          {/* File Upload Box */}
          <div className="file-upload" {...getRootProps()}>
            <input {...getInputProps()} />
            <p>
              Drag and drop to upload the file or{" "}
              <span className="browse">Browse</span>
            </p>
            <small className="file-format">
              PDF, JPG & PNG format are supported.
            </small>
            {uploadedFile && <p className="file-name">{uploadedFile.name}</p>}
          </div>

          {/* Form Fields */}
          <form className="details-form" onSubmit={handleSubmit}>
            <label htmlFor="name">NAME*</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Please Provide Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="mobile">Mobile Number*</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Enter Your Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            {/* <label htmlFor="pincode">Pincode</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              placeholder="Enter Your Area Pincode"
              value={formData.pincode}
              onChange={handleChange}
            /> */}

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadPrescription;
