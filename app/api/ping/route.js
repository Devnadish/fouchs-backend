export const dynamic = "force-dynamic"; // defaults to auto

export const GET = async () => {
  try {
    return new Response("serve OK", { status: 201 });
  } catch (error) {
    return new Response("Error processing request", { status: 500 });
  }
};
