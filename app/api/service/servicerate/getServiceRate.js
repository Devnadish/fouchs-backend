import { getSrviceInformationData } from "@/serverActions/getServiceInformation.js";
import db from "../../../../lib/prisma.js";

export async function getSrviceRateData(
  serviceId,
  page = 1,
  limit = 10,
  rate = 5,
  language
) {
  let SearchField = {};
  if (serviceId) {
    SearchField = { serviceId: serviceId, rate: parseInt(rate) };
  }

  const selectdata = {
    id: true,
    userId: true,
    userName: true,
    rate: true,
    comment: true,
    updatedAt: true,
  };

  const serviceRate = await db.ServiceRate.findMany({
    where: SearchField,
    select: selectdata,
    skip: (parseInt(page) - 1) * parseInt(limit),
    take: parseInt(limit),
    orderBy: { updatedAt: "desc" },
  });

  const totalRate = await db.ServiceRate.count({
    where: SearchField,
  });

  const serviceInformation = await getSrviceInformationData(
    language,
    serviceId
  );
  const totalPage = Math.ceil(totalRate / parseInt(limit));

  return { serviceRate, serviceInformation, totalRate, totalPage };
}
