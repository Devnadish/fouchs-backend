import { updateProfileImage } from "./updateProfileImage";
export const dynamic = "force-dynamic"; // defaults to auto

export const PATCH = async (request) => {
  try {
    const data = await request.json();

    // Call addUser function with the extracted data
    const user = await updateProfileImage(data.mobile, data.avatar);

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Error processing request", { status: 500 });
  }
};
