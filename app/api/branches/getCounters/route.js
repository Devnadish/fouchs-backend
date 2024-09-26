import db from "../../../../lib/prisma.js";
export const dynamic = "force-dynamic"; // defaults to auto

export const GET = async (request) => {
  try {
    const url = new URL(request.url);
    const params = Object.fromEntries(
      new URLSearchParams(url.search).entries()
    );
    const { userId, cityId } = params;

    const info = await getInfo(userId, cityId);

    return new Response(JSON.stringify(info), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing request", { status: 500 });
  }
};

export async function getInfo(userId, city) {
  const favoriteCounter = await db.branch.count({
    where: {
      branchLikeByUser: {
        some: { userId: userId },
      },
    },
  });

  const allBranchesCounter = await db.branch.count({});
  const cityBranchesCounter = await db.branch.count({
    where: { cityId: city },
  });

  return {
    favoriteCounter,
    allBranchesCounter,
    cityBranchesCounter,
  };
}
