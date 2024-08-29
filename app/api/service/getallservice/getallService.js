import db from "../../../../lib/prisma.js";

export async function getAllService(language) {
  const selectdata =
    language === "ar"
      ? {
          id: true,
          titleAr: true,
          descriptionAr: true,
          rate: true,
          image: true,
        }
      : {
          id: true,
          titleEn: true,
          descriptionEn: true,
          rate: true,
          image: true,
        };

  const allService = await db.service.findMany({
    select: selectdata,
    orderBy: { updatedAt: "desc" },
  });

  console.log(allService); //totalPage;
  return allService;
}
