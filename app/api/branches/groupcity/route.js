// import { groupCityiesAndCountBranches } from "./getCities";

import { groupCitiesAndCountBranches } from "./getCities";

export const dynamic = "force-dynamic"; // defaults to auto

export const GET = async (request) => {
  try {
    const url = new URL(request.url);
    const params = Object.fromEntries(
      new URLSearchParams(url.search).entries()
    );
    const { language } = params;

    const branches = await groupCitiesAndCountBranches(language);

    return new Response(JSON.stringify(branches), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Error processing request", { status: 500 });
  }
};
