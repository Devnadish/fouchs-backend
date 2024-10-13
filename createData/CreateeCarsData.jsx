"use client";

import { createCardata, createCarModel } from "@/serverActions/createCars";
import React from "react";

function CreateeCarsData() {
  const handleCreateCar = async () => {
    await createCardata();
    await createCarModel();
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => handleCreateCar()}
    >
      Create Car And Model
    </button>
  );
}
export default CreateeCarsData;
