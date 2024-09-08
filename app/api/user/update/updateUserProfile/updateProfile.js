import db from "../../../../../lib/prisma.js";

export const updateProfile = async (mobile, name, email) => {
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
    const data = await db.user.update({
      where: {
        id: userId,
      },
      data: {
        name: name,
        email: email,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return { statusCode: 500, msg: "Error updating profile image" };
  }
};
