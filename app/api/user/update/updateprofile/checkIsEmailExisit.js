import db from "../../../../../lib/prisma";
export const checkIsEmailExisit = async (mobile, email) => {
  const userMobile = await db.user.findFirst({
    where: {
      email: email,
      NOT: { mobile: mobile },
    },
  });
  if (userMobile) {
    return true; // Email already exists
  } else {
    return false;
  }
};
