import db from "../../../../lib/prisma.js";

export async function getAllService(language) {
  const allService = await db.service.findMany({
    orderBy: { updatedAt: "desc" },
    select: {
      id: true,
      rate: true,
      image: true,
      titleAr: language === "ar",
      titleEn: language !== "ar",
      descriptionAr: language === "ar",
      descriptionEn: language !== "ar",
    },
  });

  const services = allService.map(
    ({ id, rate, image, titleAr, titleEn, descriptionAr, descriptionEn }) => ({
      id,
      image,
      rate,
      title: language === "ar" ? titleAr : titleEn,
      description: language === "ar" ? descriptionAr : descriptionEn,
    })
  );

  return services; // Return the mapped services
}
