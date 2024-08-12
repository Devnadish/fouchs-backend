import db from "../../../../../lib/prisma";
export const checkIsMobileExisit = async (mobile, email) => {
  const userMobile = await db.user.findFirst({
    where: {
      mobile: mobile,
      NOT: {
        email: email,
      },
    },
  });
  if (userMobile) {
    return true; // Return  mobil already exists
  } else {
    return false;
  }
};
