"use client";
import React from "react";
import axios from "axios";
const CreateeBranches = () => {
  const addNewUser = async () => {
    const url = process.env.NEXT_PUBLIC_API_ENDPOINT + "/api/user/register";
    const userData = {
      name: "khalid nadish 1972",
      email: "khalid@gmail.com 1972",
      mobile: "123456789 1972",
      password: "19721972",
    };

    const addUserToDB = await axios
      .post(url, userData)
      .then((response) => {
        console.log("response", response.data);
      })
      .catch((error) => {
        console.error({ error });
      });

    console.log(addUserToDB);
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => addNewUser()}
    >
      Createe Branches
    </button>
  );
};

export default CreateeBranches;
