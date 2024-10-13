import db from "../../../../lib/prisma.js";

export const getCarById = async (carId) => {
  try {
    const cars = await db.carDb.findMany({
      where: {
        id: carId,
      },
      include: {
        CarModel: true,
      },
    });
    return cars;
  } catch (error) {
    throw error;
  }
};
