import db from "../../../../../lib/prisma.js";

export const updateProfileImage = async (mobile, avatar) => {
  const user = await db.user.findFirst({
    where: {
      mobile: mobile,
    },
  });
  if (!user) {
    return { statusCode: 301, msg: "User Not Exist" };
  }
  const userId = user.id;

  try {
    // Upsert the profile, creating a new one if it doesn't exist
    const data = await db.profile.upsert({
      where: {
        userId: userId,
      },
      update: {
        avatar: avatar,
      },
      create: {
        user: {
          connect: { id: userId },
        },
        avatar: avatar,
      },
    });
    return data;
  } catch (error) {
    throw error;
    return { statusCode: 500, msg: "Error updating profile image" };
  }
};
