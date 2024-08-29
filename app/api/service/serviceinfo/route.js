import { getSrviceInfoData } from "./getServiceInfo";

export const dynamic = "force-dynamic"; // defaults to auto
export const GET = async (request) => {
  try {
    const url = new URL(request.url);
    const params = Object.fromEntries(
      new URLSearchParams(url.search).entries()
    );
    const { language, serviceId } = params;

    const servicesInfo = await getSrviceInfoData(language, serviceId);

    console.log(JSON.stringify(servicesInfo, null, 2));
    return new Response(JSON.stringify(servicesInfo), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing request", { status: 500 });
  }
};
