import db from "../../../../lib/prisma.js";

export async function getAllCity(language) {
  const selectdata =
    language === "ar"
      ? {
          id: true,
          cityAr: true,
        }
      : {
          id: true,
          cityEn: true,
        };

  const allCity = await db.cityDb.findMany({
    select: selectdata,
    orderBy: { updatedAt: "desc" },
  });

  return allCity;
}
