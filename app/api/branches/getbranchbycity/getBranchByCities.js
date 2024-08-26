import db from "../../../../lib/prisma.js";

export async function getBranchByCities(language, page = 1, limit = 5, city) {
  let SearchField = {};
  if (city) {
    SearchField = language === "ar" ? { cityAr: city } : { cityEn: city };
  }

  const selectdata =
    language === "ar"
      ? {
          id: true,
          nameAr: true,
          usersRate: true,
          masterImage: true,
        }
      : {
          id: true,
          nameEn: true,
          usersRate: true,
          masterImage: true,
        };

  const allBranches = await db.branch.findMany({
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
  // console.log("totalPage :", totalPage, SearchField); //totalPage;
  console.log(allBranches); //totalPage;
  return { allBranches, totalPage };
}
