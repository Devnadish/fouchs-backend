import { getSrviceGiftData } from "./getServicegift";

export const dynamic = "force-dynamic"; // defaults to auto
export const GET = async (request) => {
  try {
    const url = new URL(request.url);
    const params = Object.fromEntries(
      new URLSearchParams(url.search).entries()
    );
    const { language, serviceId } = params;

    const servicesGift = await getSrviceGiftData(language, serviceId);

    return new Response(JSON.stringify(servicesGift), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Error processing request", { status: 500 });
  }
};
