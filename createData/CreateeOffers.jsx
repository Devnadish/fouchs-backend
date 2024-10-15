"use client";
import React from "react";
import { creatOffers } from "@/serverActions/creatOffers";
const CreateeOffers = () => {
  const addBrnches = async () => {
    await creatOffers();
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => addBrnches()}
    >
      Createe Offers 11
    </button>
  );
};

export default CreateeOffers;
