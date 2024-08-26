import db from "../../../../../lib/prisma";

export const UserCar = async (
  mobile,
  carId,
  car,
  carModelId,
  carModel,
  carYear
) => {
  const user = await db.user.findFirst({
    where: { mobile: mobile },
  });

  // check if user exist or not
  if (!user) {
    return "notExist";
  }

  try {
    const data = await db.user.update({
      where: { id: user.id },
      data: {
        car: {
          update: {
            car: car,
            carModel: carModel,
            carYear: carYear,
            carId: carId,
            modelId: carModelId,
          },
        },
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
