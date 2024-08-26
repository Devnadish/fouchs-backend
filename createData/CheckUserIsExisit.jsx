"use client";
import React from "react";
import axios from "axios";
import { CHECK_USER_IS_EXISIT } from "@/endpoint/endPoint";

const CheckUserIsExisit = () => {
  const checkIsExisit = async () => {
    const url = process.env.NEXT_PUBLIC_API_ENDPOINT + CHECK_USER_IS_EXISIT;
    const userData = {
      email: "",
      mobile: "0545642264",
    };

    const checkIsUserExisit = await axios
      .post(url, userData)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.error({ error });
      });
  };
  return (
    <button
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => checkIsExisit()}
    >
      Check User Exist
    </button>
  );
};

export default CheckUserIsExisit;
