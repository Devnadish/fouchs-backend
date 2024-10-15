import db from "../../../../lib/prisma.js";

export async function getAllService(language) {
  const allOffers = await db.offer.findMany({
    where: { isActive: true },
    select: {
      id: true,
      image: true,
    },
    orderBy: { updatedAt: "desc" },
  });

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
  console.log(services, allOffers);
  return { services, allOffers }; // Return the mapped services
}
