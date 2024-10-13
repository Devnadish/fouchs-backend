import db from "../../../../lib/prisma.js";

export async function getSrviceInfoData(language, serviceId) {
  const serviceInfo = await db.ServiceInfo.findMany({
    where: { serviceId: serviceId },
    orderBy: { updatedAt: "desc" },
    select: {
      id: true,
      infoAr: language === "ar",
      infoEn: language !== "ar",
    },
  });

  const services = serviceInfo.map(({ id, infoAr, infoEn }) => ({
    id,
    info: language === "ar" ? infoAr : infoEn,
  }));

  return { serviceInfo: services };
}
