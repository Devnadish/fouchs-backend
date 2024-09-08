"use client";
import React from "react";
import {
  createBranches,
  createBranchImages,
} from "@/serverActions/createBranches";
const CreateeBranches = () => {
  const addBrnches = async () => {
    await createBranches();
    await createBranchImages();
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => addBrnches()}
    >
      Createe Branches
    </button>
  );
};

export default CreateeBranches;
