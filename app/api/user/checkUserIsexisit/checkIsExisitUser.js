import db from "../../../../lib/prisma.js";

export const checkIsUserExisit = async (mobile) => {
  try {
    const data = await db.user.findMany({
      where: { mobile: mobile },
    });
    if (data.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};
