import db from "../../../../lib/prisma.js";

export const addUser = async (
  name,
  email,
  mobile,
  password,
  smsToken,
  city = "jeddah",
  car,
  carModel,
  carYear,
  avatar
) => {
  try {
    const data = await db.user.create({
      data: {
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        smsToken: smsToken,
        profile: {
          create: {
            avatar: avatar,
            city: city,
          },
        },
        Car: {
          create: {
            car: car,
            carModel: carModel,
            carYear: carYear,
          },
        },
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
