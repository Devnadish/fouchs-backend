import db from "../../../../lib/prisma.js";

// export async function groupCitiesAndCountBranches(language) {
//   const groupByField = language === "ar" ? "cityAr" : "cityEn";
//   const groupedData = await db.branch.groupBy({
//     by: [groupByField],
//     _count: { id: true },
//     _min: { cityId: true },
//   });
//   return { groupedData };
// }
export async function groupCitiesAndCountBranches(language) {
  const groupByField = language === "ar" ? "cityAr" : "cityEn";

  const groupedData = await db.branch.groupBy({
    by: [groupByField],
    _count: { id: true },
    _min: { cityId: true },
  });

  // Map through the groupedData to return city names, counts, and city IDs
  const result = groupedData.map((item) => ({
    cityName: item[groupByField],
    branchCount: item._count.id,
    cityId: item._min.cityId, // Include the minimum cityId
  }));

  return result; // Return the array of city names, branch counts, and city IDs
}
