import db from "../../../../lib/prisma.js";

export const getUserByMobile = async (mobile) => {
  console.log({ mobile });
  try {
    const data = await db.user.findFirst({
      where: { mobile },
      include: {
        car: true,
        profile: true,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
