import db from "../../../../lib/prisma.js";

export async function getBranchByCities(
  language,
  page = 1,
  limit = 5,
  city,
  userId
) {
  let SearchField = {};

  // Check if the city is set to "favorite"
  if (city === "favorite") {
    return await getFavoriteBranches(userId, page, limit);
  }

  if (city) {
    SearchField = { cityId: city };
  }

  const selectdata =
    language === "ar"
      ? {
          id: true,
          nameAr: true,
          usersRate: true,
          masterImage: true,
          cityAr: true,
          branchLikeByUser: {
            where: { userId: userId },
            select: { id: true },
          },
        }
      : {
          id: true,
          nameEn: true,
          usersRate: true,
          masterImage: true,
          cityEn: true,
          branchLikeByUser: {
            where: { userId: userId },
            select: { id: true },
          },
        };

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

  return { allBranches, totalPage };
}

// Helper function to get favorite branches
async function getFavoriteBranches(userId, page, limit) {
  const allFavoriteBranchesDB = await db.branch.findMany({
    where: {
      branchLikeByUser: {
        some: { userId: userId }, // Check if the user has liked the branch
      },
    },
    select: {
      id: true,
      nameAr: true,
      nameEn: true,
      usersRate: true,
      masterImage: true,
      cityAr: true,
      cityEn: true,
      branchLikeByUser: {
        where: { userId: userId },
        select: { id: true },
      },
    },
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

  const totalPage = Math.ceil(totalFavoriteBranches / parseInt(limit));

  const allBranches = allFavoriteBranchesDB.map((branch) => ({
    ...branch,
    isFavorited: branch.branchLikeByUser.length > 0, // This will always be true in this context
  }));

  return { allBranches, totalPage };
}

// export async function getBranchByCities(
//   language,
//   page = 1,
//   limit = 5,
//   city,
//   userId
// ) {
//   let SearchField = {};

//   if (city) {
//     SearchField = { cityId: city };
//   }

//   if (city === "favorite") {
//     console.log("here", userId);
//   }

//   const selectdata =
//     language === "ar"
//       ? {
//           id: true,
//           nameAr: true,
//           usersRate: true,
//           masterImage: true,
//           ciityAr: true,
//           branchLikeByUser: {
//             where: { userId: userId }, // Check if the user has liked the branch
//             select: { id: true }, // Select only the id to check existence
//           },
//         }
//       : {
//           id: true,
//           nameEn: true,
//           usersRate: true,
//           masterImage: true,
//           cityEn: true,
//           branchLikeByUser: {
//             where: { userId: userId }, // Check if the user has liked the branch
//             select: { id: true }, // Select only the id to check existence
//           },
//         };

//   const allBranchesDB = await db.branch.findMany({
//     where: SearchField,
//     select: selectdata,
//     skip: (parseInt(page) - 1) * parseInt(limit),
//     take: parseInt(limit),
//     orderBy: { updatedAt: "desc" },
//   });

//   const totalBranches = await db.branch.count({
//     where: SearchField,
//   });
//   const totalPage = Math.ceil(totalBranches / parseInt(limit));

//   const allBranches = allBranchesDB.map((branch) => ({
//     ...branch,
//     isFavorited: branch.branchLikeByUser.length > 0, // Check if the user has liked the branch
//   }));

//   return { allBranches, totalPage };
// }
