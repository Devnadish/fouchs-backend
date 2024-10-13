import db from "../../../../../lib/prisma";

export const updateUserSetting = async (mobile, language, theme) => {
  const user = await db.user.findFirst({
    where: { mobile: mobile },
  });

  if (!user) {
    return "notExist";
  }
  try {
    const data = await db.profile.update({
      where: { userId: user.id },
      data: {
        language,
        theme,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
