import db from "../../../../lib/prisma.js";

export async function getalloffers(language, page = 1, limit = 5, branchId) {
  let SearchField = {};
  if (branchId) {
    SearchField = { branchId: branchId };
  }

  const selectdata =
    language === "ar"
      ? {
          id: true,
          detailAr: true,
          image: true,
          isActive: true,
        }
      : {
          id: true,
          detailEn: true,
          image: true,
          isActive: true,
        };

  const allOffers = await db.offer.findMany({
    where: SearchField,
    select: selectdata,
    skip: (parseInt(page) - 1) * parseInt(limit),
    take: parseInt(limit),
    orderBy: { updatedAt: "desc" },
  });
  const totalBranches = await db.offer.count({
    where: SearchField,
  });
  const totalPage = Math.ceil(totalBranches / parseInt(limit));
  console.log(allOffers); //totalPage;
  return { allOffers, totalPage };
}
