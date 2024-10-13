import { addUser } from "./addUser";
export const dynamic = "force-dynamic"; // defaults to auto

export const POST = async (request) => {
  try {
    const data = await request.json();

    // Call addUser function with the extracted data
    const user = await addUser(
      data.userName,
      data.mobile,
      data.password,
      data.smsToken,
      data.isVerified,
      data.avatar
    );

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Error processing request", { status: 500 });
  }
};
