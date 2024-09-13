import { updateUserSetting } from "./updateUserSetting";
export const dynamic = "force-dynamic"; // defaults to auto

export const PATCH = async (request) => {
  try {
    const data = await request.json();

    const { mobile, language, theme } = data;
    const user = await updateUserSetting(mobile, language, theme);

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing request", { status: 500 });
  }
};
