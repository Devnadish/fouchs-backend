import { addUser, userLogin } from "./login";
export const dynamic = "force-dynamic"; // defaults to auto

export const POST = async (request) => {
  try {
    const data = await request.json();

    // Call addUser function with the extracted data

    const checkIsUserLogin = await userLogin(data);

    //>>>>>>>>>>>>> 1-check if user exist or not

    //>>>>>>>>>>>>> 2-if user exist return true else return false and

    // The status code should be 200 instead of 201 when the user is logged in successfully.
    return new Response(JSON.stringify(checkIsUserLogin), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing request", { status: 500 });
  }
};
