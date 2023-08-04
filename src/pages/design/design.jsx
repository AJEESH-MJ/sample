import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

function DesignRepository() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false); // state variable to track form submission

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch("/upload-design", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadStatus("We'll review the design and get back to you.");
      } else {
        setUploadStatus("We'll review the design and get back to you.");
      }
    } catch (error) {
      console.error(error);
      setUploadStatus("Upload failed.");
    }

    setFormSubmitted(true); // set formSubmitted to true after submission
  };

  const handleAssistanceClick = () => {
    window.location.href = "/Y_BRO/contact";
  };

  return (
    <div className="w-full min-h-[31.25rem] px-auto">
      <div className="design-repository max-w-[45rem] min-h-[25rem] mx-auto my-[9.375rem] p-5 bg-white rounded-lg shadow-xl text-center">
        <h2 className="text-5xl mb-4 text-gray-700 font-bold">Upload Your Design</h2>
        {!formSubmitted && (
          <div className="flex flex-col">
            <p className="text-gray-500 mb-6">Upload your custom design here to have it printed!</p>
            <input
              type="file"
              onChange={handleFileUpload}
              className="shadow-md font-semibold text-gray-500 text-lg p-4 rounded-md mb-8 max-w-[20rem] mx-auto"
            />
            
            <button
              onClick={handleUpload}
              className="mx-auto w-[8rem] md:w-[10rem] px-6 py-3 mb-5 text-xl font-semibold bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Upload
            </button>
          </div>
        )}
        {formSubmitted && <p className="text-gray-500 text-xl mb-5 mt-14">Upload submitted.</p>}
        {uploadStatus && <p className="text-gray-500 text-xl mb-8">{uploadStatus}</p>}
        <p className="text-md mt-4 text-gray-600 font-semibold">
          By uploading your design, you certify that you have the right to use
          and distribute the design, and that it does not violate any
          intellectual property rights.
        </p>
      </div>
      <div className="flex justify-end items-center">
        <FontAwesomeIcon
          icon={faQuestionCircle}
          className="text-gray-800 text-6xl cursor-pointer mr-10 -mt-40"
          onClick={handleAssistanceClick}
        />
      </div>
    </div>
  );
}

export default DesignRepository;
