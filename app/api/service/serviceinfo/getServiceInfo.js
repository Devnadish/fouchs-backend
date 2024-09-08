import { getSrviceInformationData } from "@/serverActions/getServiceInformation.js";
import db from "../../../../lib/prisma.js";

export async function getSrviceInfoData(language, serviceId) {
  const selectdata =
    language === "ar"
      ? {
          id: true,
          infoAr: true,
        }
      : {
          id: true,
          infoEn: true,
        };

  const selectInformationdata =
    language === "ar"
      ? {
          id: true,
          titleAr: true,
          descriptionAr: true,
          image: true,
        }
      : {
          id: true,
          titleEn: true,
          descriptionEn: true,
          image: true,
        };

  const serviceInformation = await getSrviceInformationData(
    language,
    serviceId
  );

  const serviceInfo = await db.ServiceInfo.findMany({
    where: { serviceId: serviceId },
    select: selectdata,
    orderBy: { updatedAt: "desc" },
  });

  return { serviceInfo: serviceInfo, serviceInformation: serviceInformation };
}
