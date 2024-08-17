import db from "../../../../lib/prisma.js";

export const getAllCars = async (userData) => {
  try {
    const cars = await db.carDb.findMany({
      select: {
        id: true,
        carAr: true,
        carEn: true,
        logo: true,
        public_id: true,
      },
    });

    return cars;
  } catch (error) {
    console.log(error);
  }
};
