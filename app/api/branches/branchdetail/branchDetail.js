import db from "../../../../lib/prisma.js";
export async function branchDetail(brid) {
  if (!brid) {
    return;
  }

  const branchDetail = await db.branch.findFirst({
    where: { id: brid },
    include: {
      image: true,
    },
  });

  return branchDetail;
}
