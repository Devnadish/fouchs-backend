import db from "../../../../lib/prisma.js";

export const getCarById = async (carId) => {
  console.log("carId >>", carId);
  try {
    const cars = await db.carDb.findMany({
      where: {
        id: carId,
      },
      include: {
        CarModel: true,
      },
    });
    const jsonString = JSON.stringify(cars);
    console.log(jsonString);
    return cars;
  } catch (error) {
    console.log(error);
  }
};
