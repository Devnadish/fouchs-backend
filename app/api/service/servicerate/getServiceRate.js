import db from "../../../../lib/prisma.js";

export async function getSrviceRateData(serviceId) {
  const selectdata = {
    id: true,
    userId: true,
    userName: true,
    rate: true,
    comment: true,
  };

  const serviceRate = await db.ServiceRate.findMany({
    where: { serviceId: serviceId },
    select: selectdata,
    orderBy: { updatedAt: "desc" },
  });
  const rows = serviceRate.length;
  console.log(rows); //totalPage;
  console.log(serviceRate);

  return serviceRate;
}
