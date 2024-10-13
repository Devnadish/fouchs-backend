"use client";
import React from "react";
import axios from "axios";
import { USER_LOGIN } from "@/endpoint/endPoint";
import { createCityes } from "@/serverActions/createcity";

const CreateCity = () => {
  const createCity = async () => {
    const create = await createCityes();
  };

  return (
    <button
      className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => createCity()}
    >
      Create City
    </button>
  );
};

export default CreateCity;
