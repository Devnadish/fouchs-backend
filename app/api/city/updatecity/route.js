import { updateCity, updateProfile } from "./updateCity";
export const dynamic = "force-dynamic"; // defaults to auto

export const PATCH = async (request) => {
  try {
    const data = await request.json();

    const { mobile, cityId, city } = data;
    const UpdatedCity = await updateCity(mobile, cityId, city);

    return new Response(JSON.stringify(UpdatedCity), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing request", { status: 500 });
  }
};
