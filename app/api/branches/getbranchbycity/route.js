// import { groupCityiesAndCountBranches } from "./getCities";

import {
  getBranchByCities,
  groupCitiesAndCountBranches,
} from "./getBranchByCities";

export const dynamic = "force-dynamic"; // defaults to auto

export const GET = async (request) => {
  try {
    const url = new URL(request.url);
    const params = Object.fromEntries(
      new URLSearchParams(url.search).entries()
    );
    const { language, page, limit, city } = params;

    const branches = await getBranchByCities(language, page, limit, city);
    // console.log({ language, page, limit, city });
    // console.log({ branches });

    return new Response(JSON.stringify(branches), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing request", { status: 500 });
  }
};
