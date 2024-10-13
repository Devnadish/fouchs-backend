import db from "../../../../lib/prisma.js";

export const userLogin = async (userData) => {
  const { mobile, password } = userData;
  try {
    const user = await db.user.findFirst({
      where: { mobile: mobile },
      include: {
        car: true,
        profile: true,
      },
    });

    if (!user) {
      // User not found
      return "notExist";
    }

    if (user.password !== password) {
      // Invalid password
      return "wrongPassword";
    }
    return user;
  } catch (error) {
    throw error
  }
};
