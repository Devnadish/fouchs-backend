"use client";
import React from "react";
import { upladImages } from "../lib/uploadImageTocloudainry";

function UploadCarImage() {
  const upladCarImages = async () => {
    await upladImages();
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => upladCarImages()}
    >
      UploadCarImage
    </button>
  );
}

export default UploadCarImage;
