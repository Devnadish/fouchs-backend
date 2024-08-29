import { getSrviceRateData } from "./getServiceRate";

export const dynamic = "force-dynamic"; // defaults to auto
export const GET = async (request) => {
  try {
    const url = new URL(request.url);
    const params = Object.fromEntries(
      new URLSearchParams(url.search).entries()
    );
    const { serviceId } = params;

    const servicesRate = await getSrviceRateData(serviceId);

    return new Response(JSON.stringify(servicesRate), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing request", { status: 500 });
  }
};
