import db from "../../../../lib/prisma.js";

export async function groupCitiesAndCountBranches(language) {
  const groupByField = language === "ar" ? "cityAr" : "cityEn";
  const groupedData = await db.branch.groupBy({
    by: [groupByField],
    _count: { id: true },
  });
  return { groupedData };
}
