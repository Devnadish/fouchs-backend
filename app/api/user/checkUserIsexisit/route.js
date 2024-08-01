import { checkIsUserExisit } from "./checkIsExisitUser";
export const dynamic = "force-dynamic"; // defaults to auto

export const POST = async (request) => {
  try {
    const data = await request.json();
    const user = await checkIsUserExisit(data.email, data.mobile);
    // if user exist return true else return false
    const result = user ? "exist" : "notExist";
    return new Response(result, { status: 201 });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing request", { status: 500 });
  }
};
