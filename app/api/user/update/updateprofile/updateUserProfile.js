import db from "../../../../../lib/prisma";
import { checkIsEmailExisit } from "./checkIsEmailExisit";
import { checkIsMobileExisit } from "./checkIsMobileExisit";

export const updateUserProfile = async (
  oldMobile,
  mobile,
  name,
  email,
  password,
  avatar,
  city
) => {
  const user = await db.user.findFirst({
    where: { mobile: oldMobile },
  });

  // check if user exist or not
  if (!user) {
    return "notExist";
  }

  const IsMobileExisit = await checkIsMobileExisit(mobile, email);
  if (IsMobileExisit) {
    return "mobileTaken"; // Return "notExist" if user not found
  }

  const IsEmailExisit = await checkIsEmailExisit(mobile, email);
  if (IsEmailExisit) {
    return "emailTaken"; // Return "notExist" if user not found
  }

  try {
    const data = await db.user.update({
      where: { id: user.id },
      data: {
        name,
        email,
        password,
        mobile,
        profile: { update: { avatar, city } },
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
