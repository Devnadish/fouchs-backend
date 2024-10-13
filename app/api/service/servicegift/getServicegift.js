import db from "@/lib/prisma";
import { getSrviceInformationData } from "@/serverActions/getServiceInformation.js";

export async function getSrviceGiftData(language, serviceId) {
  const serviceInfo = await db.ServiceFreeGift.findMany({
    where: { serviceId },
    select: {
      id: true,
      image: true,
      giftAr: language === "ar",
      giftEn: language !== "ar",
    },
    orderBy: { updatedAt: "desc" },
  });

  const gifts = serviceInfo.map(({ id, image, giftAr, giftEn }) => ({
    id,
    image,
    gift: language === "ar" ? giftAr : giftEn,
  }));

  return { gifts };
}
