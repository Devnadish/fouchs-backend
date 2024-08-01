import { addUser } from "./addUser";
export const dynamic = "force-dynamic"; // defaults to auto

export const POST = async (request) => {
  try {
    const data = await request.json();

    // Call addUser function with the extracted data
    const user = await addUser(
      data.name,
      data.email,
      data.mobile,
      data.password,
      data.smsToken,
      data.city,
      data.car,
      data.carModel,
      data.carYear,
      data.avatar
    );
    return new Response(
      { msg: "user added successfully" },
      { status: 201 }
      // return new Response(
      // { msg: JSON.stringify(user) },
      // { status: 201, message: "user added successfully" }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing request", { status: 500 });
  }
};
