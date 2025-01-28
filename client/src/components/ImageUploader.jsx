import React, { useState } from "react";
import "./ImageUploader.css"; // นำเข้า CSS

const ImageUploader = () => {
  const [files, setFiles] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [watermarks, setWatermarks] = useState(["ลายน้ำ"]);
  const [newWatermark, setNewWatermark] = useState("");

  const handleFileChange = (event) => {
    setFiles(Array.from(event.target.files));
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const handleAddWatermark = () => {
    if (newWatermark.trim() !== "") {
      setWatermarks([...watermarks, newWatermark]);
      setNewWatermark("");
    }
  };

  return (
    <div className="image-uploader">
      {/* ELIMINATE SECTION */}
      <div className="step">
        <h1>ELIMINATE</h1>
        <div className="step-container">
          <label>
            <input type="checkbox" checked={selectAll} onChange={handleSelectAll} /> ทั้งหมด
          </label>
          <div className="checkbox-grid">
            {Array(25).fill(0).map((_, index) => (
              <label key={index}>
                <input type="checkbox" checked={selectAll} /> {watermarks[index % watermarks.length]}
              </label>
            ))}
          </div>
          <input 
            type="text" 
            placeholder="เพิ่มคำใหม่" 
            value={newWatermark} 
            onChange={(e) => setNewWatermark(e.target.value)}
          />
          <button className="add-watermark-btn" onClick={handleAddWatermark}>เพิ่มคำ</button>
        </div>
      </div>

      {/* IMAGE FILTER SECTION */}
      <div className="step">
        <h1>คัดภาพ ผ่าน/ไม่ผ่าน</h1>
        <div className="step-container">
          <h2>คัดภาพ ผ่าน/ไม่ผ่าน</h2>
          <div className="upload-container">
            <input type="file" id="file-input" multiple onChange={handleFileChange} />
            <label htmlFor="file-input">
              {files.length > 0 ? `${files.length} รูปภาพถูกเลือก` : "Choose an image to upload"}
            </label>
            <button className="start-btn">START</button>
          </div>
          <button className="pass-btn">PASS</button>
          <button className="not-pass-btn">NOT PASS</button>
        </div>
      </div>

      {/* KEYWORD SECTION */}
      <div className="step">
        <h1>KEYWORD</h1>
        <div className="step-container">
          <h2>KEYWORD</h2>
          <div className="upload-container">
            <label htmlFor="file-input">Choose an image to upload</label>
            <button className="start-btn">START</button>
          </div>
          <button className="download-btn">DOWNLOAD ADOBE</button>
          <button className="download-btn">DOWNLOAD SHUTTERSTOCK</button>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
