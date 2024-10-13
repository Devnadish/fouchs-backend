import { th } from "@faker-js/faker";
import db from "../../../../lib/prisma.js";

export const getUserByMobile = async (mobile) => {
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
    throw error;
  }
};
