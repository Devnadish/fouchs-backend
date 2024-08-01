export const dynamic = "force-dynamic"; // defaults to auto

export const GET = async () => {
  try {
    console.log("serve OK");
    return new Response("serve OK", { status: 201 });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing request", { status: 500 });
  }
};
