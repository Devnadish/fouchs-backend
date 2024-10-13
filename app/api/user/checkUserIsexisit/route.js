import { checkIsUserExist } from "./checkIsExisitUser";

export const dynamic = "force-dynamic"; // defaults to auto

export const GET = async (request) => {
  const url = new URL(request.url);
  const mobile = url.searchParams.get("mobile"); // Directly get the mobile parameter

  if (!mobile) {
    return new Response("Mobile number is required", { status: 400 });
  }

  try {
    const user = await checkIsUserExist(mobile);
    return new Response(JSON.stringify(user), { status: 200 }); // Use 200 for successful retrieval
  } catch (error) {
    return new Response("Error processing request", { status: 500 });
  }
};
