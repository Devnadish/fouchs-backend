import { addUser, userLogin } from "./login";
export const dynamic = "force-dynamic"; // defaults to auto

export const POST = async (request) => {
  try {
    const data = await request.json();

    // Call addUser function with the extracted data

    const checkIsUserLogin = await userLogin(data);

    console.log(checkIsUserLogin);
    //>>>>>>>>>>>>> 1-check if user exist or not

    //>>>>>>>>>>>>> 2-if user exist return true else return false and

    return new Response(
      { msg: JSON.stringify(checkIsUserLogin) },
      { status: 201, message: "user added successfully" }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing request", { status: 500 });
  }
};
