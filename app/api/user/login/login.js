import db from "../../../../lib/prisma.js";

export const userLogin = async (userData) => {
  const { mobile, password } = userData;
  console.log("data >>>", mobile, password);
  try {
    const user = await db.user.findFirst({
      where: { mobile: mobile },
      include: {
        Car: true,
        profile: true,
      },
    });

    if (!user) {
      // User not found
      return { msg: "user not found" };
    }

    if (user.password !== password) {
      // Invalid password
      return { msg: "invalid password" };
    }

    console.log(user);

    return user;
  } catch (error) {
    console.log(error);
  }
};
