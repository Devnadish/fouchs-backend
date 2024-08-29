import db from "../../../../lib/prisma.js";

export async function getSrviceGiftData(language, serviceId) {
  const selectdata =
    language === "ar"
      ? {
          id: true,
          giftAr: true,
          image: true,
        }
      : {
          id: true,
          giftEn: true,
          image: true,
        };

  const serviceInfo = await db.ServiceFreeGift.findMany({
    where: { serviceId: serviceId },
    select: selectdata,
    orderBy: { updatedAt: "desc" },
  });

  console.log(serviceInfo); //totalPage;
  return serviceInfo;
}
