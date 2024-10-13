import db from "../../../../lib/prisma.js";
export async function branchDetail(brid, language) {
  if (!brid) {
    return;
  }

  const branchDetail = await db.branch.findFirst({
    where: { id: brid },
    include: {
      image: true,
    },
  });

  if (!branchDetail) {
    return null; // Handle case where branch is not found
  }

  // Check the language and return the appropriate fields
  const response = {
    id: branchDetail.id,
    name: language === "ar" ? branchDetail.nameAr : branchDetail.nameEn,
    city: language === "ar" ? branchDetail.cityAr : branchDetail.cityEn,
    dist: language === "ar" ? branchDetail.distAr : branchDetail.distEn,
    lat: branchDetail.lat,
    long: branchDetail.long,
    mobile: branchDetail.mobile,
    address:
      language === "ar" ? branchDetail.addreesAr : branchDetail.addreesEn,
    googleRate: branchDetail.googleRate,
    usersRate: branchDetail.usersRate,
    workingHours: branchDetail.workIngHours,
    note: branchDetail.Note,
    masterImage: branchDetail.masterImage,
    images: branchDetail.image.map((img) => ({
      id: img.id, // Include image ID
      url: img.image, // Include image URL
    })), // Extracting image IDs and URLs
  };

  return response;
}
