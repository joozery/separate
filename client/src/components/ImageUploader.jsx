import React, { useState } from "react";
import "./ImageUploader.css"; // นำเข้า CSS

const ImageUploader = () => {
  const [files, setFiles] = useState([]);
  const [concept, setConcept] = useState("");

  const handleFileChange = (event) => {
    setFiles(Array.from(event.target.files));
  };

  const handleUpload = () => {
    if (files.length === 0) {
      alert("กรุณาเลือกไฟล์ก่อน!");
    } else {
      alert(`Uploading ${files.length} files...`);
    }
  };

  const handleConceptToPrompt = () => {
    alert(`Concept to prompt: ${concept}`);
  };

  return (
    <div className="image-uploader">
      {/* STEP 1 */}
      <div className="step">
        <h1>STEP 1</h1>
        <div className="step-container">
          <h2>CONCEPT TO PROMTP</h2>
          <textarea
            placeholder="ใส่ concept ที่นี่"
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
          ></textarea>
          <button onClick={handleConceptToPrompt}>START</button>
          <button className="download-btn">DOWNLOAD PROMTP</button>
        </div>
      </div>

      {/* STEP 2 */}
      <div className="step">
        <h1>STEP 2</h1>
        <div className="step-container">
          <h2>คัดภาพ ผ่าน/ไม่ผ่าน</h2>
          <div className="upload-container">
            <input
              type="file"
              id="file-input"
              multiple
              onChange={handleFileChange}
            />
            <label htmlFor="file-input">
              {files.length > 0
                ? `${files.length} รูปภาพถูกเลือก`
                : "Choose an image to upload"}
            </label>
            <button onClick={handleUpload}>START</button>
          </div>
        </div>
      </div>

      {/* STEP 3 */}
      <div className="step">
        <h1>STEP 3</h1>
        <div className="step-container">
          <h2>KEYWORD</h2>
          <div className="upload-container">
            <label htmlFor="file-input">Choose an image to upload</label>
            <button>START</button>
          </div>
          <button className="download-btn">DOWNLOAD ADOBE</button>
          <button className="download-btn">DOWNLOAD ADOBE</button>
          <button className="download-btn">DOWNLOAD ADOBE</button>
          <button className="download-btn">DOWNLOAD ADOBE</button>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
