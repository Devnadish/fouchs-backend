// import { groupCityiesAndCountBranches } from "./getCities";

import { branchDetail } from "./branchDetail";

export const dynamic = "force-dynamic"; // defaults to auto

export const GET = async (request) => {
  try {
    const url = new URL(request.url);
    const params = Object.fromEntries(
      new URLSearchParams(url.search).entries()
    );
    const { brid } = params;

    const branche = await branchDetail(brid);
    console.log(branche);

    return new Response(JSON.stringify(branche), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing request", { status: 500 });
  }
};
