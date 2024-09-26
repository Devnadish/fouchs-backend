import db from "../../../../lib/prisma.js";
import { getFavoriteBranches } from "./getFavorate.js";
import { getSelectData } from "./selectData.js";

export async function getBranchByCities(
  language,
  page = 1,
  limit = 5,
  city,
  userId
) {
  let SearchField = {};

  if (city === "favorite") {
    const allFavoriteBranchesDB = await getFavoriteBranches(
      userId,
      page,
      limit,
      language
    );
    return allFavoriteBranchesDB;
  }

  if (city === "allBranches") {
    return await getAllBranches(userId, page, limit);
  }

  if (city) {
    SearchField = { cityId: city };
  }

  const selectdata = getSelectData(language, userId);

  const allBranchesDB = await db.branch.findMany({
    where: SearchField,
    select: selectdata,
    skip: (parseInt(page) - 1) * parseInt(limit),
    take: parseInt(limit),
    orderBy: { updatedAt: "desc" },
  });

  const totalBranches = await db.branch.count({
    where: SearchField,
  });

  const totalPage = Math.ceil(totalBranches / parseInt(limit));

  const allBranches = allBranchesDB.map((branch) => ({
    ...branch,
    isFavorited: branch.branchLikeByUser.length > 0,
  }));

  return {
    allBranches,
    totalPage,
  };
}

const getAllBranches = async (userId, page, limit) => {};
