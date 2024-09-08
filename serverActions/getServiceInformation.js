// import db from "../../../../lib/prisma.js";

import db from "@/lib/prisma";

export async function getSrviceInformationData(language, serviceId) {
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
  const serviceInformation = await db.service.findFirst({
    where: { id: serviceId },
    select: selectInformationdata,
  });

  return serviceInformation;
}
