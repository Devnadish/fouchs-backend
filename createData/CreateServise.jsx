"use client";
import React from "react";

import { createServices } from "@/serverActions/createServices";
const CreateServise = () => {
  const addService = async () => {
    // await createBranches();
    await createServices();
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => addService()}
    >
      #CreateServise#
    </button>
  );
};

export default CreateServise;
