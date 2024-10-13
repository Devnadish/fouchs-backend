import { getalloffers } from "./getalloffer";

export const dynamic = "force-dynamic"; // defaults to auto

export const GET = async (request) => {
  try {
    const url = new URL(request.url);
    const params = Object.fromEntries(
      new URLSearchParams(url.search).entries()
    );
    const { language, page, limit, branchId } = params;

    const offers = await getalloffers(language, page, limit, branchId);

    return new Response(JSON.stringify(offers), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Error processing request", { status: 500 });
  }
};
