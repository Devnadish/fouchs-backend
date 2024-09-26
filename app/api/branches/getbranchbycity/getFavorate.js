import db from "../../../../lib/prisma.js";
import { getSelectData } from "./selectData.js";
export async function getFavoriteBranches(userId, page, limit, language, city) {
  const allFavoriteBranchesDB = await db.branch.findMany({
    where: {
      branchLikeByUser: {
        some: { userId: userId }, // Check if the user has liked the branch
      },
    },
    select: getSelectData(language, userId),
    skip: (parseInt(page) - 1) * parseInt(limit),
    take: parseInt(limit),
    orderBy: { updatedAt: "desc" },
  });

  const totalFavoriteBranches = await db.branch.count({
    where: {
      branchLikeByUser: {
        some: { userId: userId },
      },
    },
  });

  const branchesCounter = await db.branch.count({});
  const cityBranchesCounter = await db.branch.count({
    where: { cityId: city },
  });

  const favorateBanches = await countFavoriteBranches(userId, page, limit);

  const totalPage = Math.ceil(totalFavoriteBranches / parseInt(limit));

  const allBranches = allFavoriteBranchesDB.map((branch) => ({
    ...branch,
    isFavorited: true, // This will always be true in this context
  }));

  return {
    allBranches,
    totalPage,
    branchesCounter,
    cityBranchesCounter,
    favorateBanches,
  };
}

export async function countFavoriteBranches(userId) {
  const totalFavoriteBranches = await db.branch.count({
    where: {
      branchLikeByUser: {
        some: { userId: userId }, // Check if the user has liked the branch
      },
    },
  });

  return totalFavoriteBranches;
}
