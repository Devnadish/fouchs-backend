import db from "../../../../lib/prisma.js";

export const addUser = async (
  name,
  mobile,
  password,
  smsToken,
  isVerified,
  avatar
) => {
  const checkUser = await db.user.findFirst({ where: { mobile: mobile } });
  if (checkUser) {
    return { statusCode: 300, msg: "User Exist" };
  }

  try {
    const data = await db.user.create({
      data: {
        name: name,
        password: password,
        mobile: mobile,
        smsToken: smsToken,
        isVerified: isVerified,
        profile: {
          create: { avatar: avatar },
        },
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
