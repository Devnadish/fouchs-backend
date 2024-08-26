import { getUserByMobile } from "./getUserByMobile";

export const dynamic = "force-dynamic"; // defaults to auto

export const POST = async (request) => {
  try {
    const data = await request.json();
    const { mobile } = data;
    const getUser = await getUserByMobile(mobile);
    return new Response(JSON.stringify(getUser), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing request", { status: 500 });
  }
};
