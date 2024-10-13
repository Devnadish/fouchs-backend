import db from "../../../../lib/prisma.js";

export const checkIsUserExist = async (mobile) => {
  try {
    const user = await db.user.findFirst({
      where: { mobile },
    });

    if (user) {
      return { statusCode: 300, msg: "User Already Exists" };
    } else {
      return { statusCode: 301, msg: "User Does Not Exist" };
    }
  } catch (error) {
    return { statusCode: 500, msg: "Internal Server Error" }; // Consistent error response
  }
};
