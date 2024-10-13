"use client";
import React from "react";
import axios from "axios";
import { USER_LOGIN } from "@/endpoint/endPoint";

const CheckLogin = () => {
  const checkIsUserLogin = async () => {
    const url = process.env.NEXT_PUBLIC_API_ENDPOINT + USER_LOGIN;
    const userData = {
      mobile: "0545664223",
      password: "12345",
    };

    const checkIsLogin = await axios
      .post(url, userData)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  };
  return (
    <button
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => checkIsUserLogin()}
    >
      Check Login
    </button>
  );
};

export default CheckLogin;
