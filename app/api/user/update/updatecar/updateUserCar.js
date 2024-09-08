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

  if (!user) {
    return "notExist";
  }
  try {
    const data = await db.car.upsert({
      where: { userId: user.id },
      update: {
        car,
        carModel,
        carYear,
        carId,
        modelId: carModelId,
      },
      create: {
        user: {
          connect: { id: user.id }, // Connect to the existing user
        },
        car,
        carModel,
        carYear,
        carId,
        modelId: carModelId,
      },
    });
    return data;
  } catch (error) {
    console.error("Error during upsert operation:", error);
  }
};
