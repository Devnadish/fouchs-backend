"use client";
import React from "react";
import axios from "axios";
import { createFakeUser } from "../fakeData/createFakeUser";
import { CREATE_NEW_USER } from "../endpoint/endPoint";

function CreateUsers() {
  const addNewUser = async () => {
    const url = process.env.NEXT_PUBLIC_API_ENDPOINT + CREATE_NEW_USER;

    let users = [];

    for (let index = 0; index < 50; index++) {
      const user = await createFakeUser();
      users.push(user);
    }

    const addUserToDB = await Promise.all(
      users.map(async (user) => {
        const response = await axios.post(url, user);
        return response.data;
      })
    );
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => addNewUser()}
    >
      Create Fake user
    </button>
  );
}

export default CreateUsers;
