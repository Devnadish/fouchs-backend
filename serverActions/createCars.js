"use server";
import db from "../lib/prisma";
import { cars } from "@/constant/cars.js";
import { carmodel } from "@/constant/models.js";

export const createCardata = async () => {
  await db.CarModelDb.deleteMany();
  await db.CarDb.deleteMany();

  for (let i = 0; i < cars.length; i++) {
    try {
      const Updatedata = await db.CarDb.create({
        data: {
          carAr: cars[i].arLabel,
          carEn: cars[i].enLabel,
          logo: cars[i].logo,
        },
      });
    } catch (error) {
      throw error;
    }
  }
};

export const createCarModel = async (newCarModelData) => {
  const cars = await db.CarDb.findMany({ select: { carEn: true, id: true } });

  for (let i = 0; i < cars.length; i++) {
    const carEn = cars[i].carEn;
    const carId = cars[i].id;

    const addmodel = FiteredData(carEn, carId);
  }
};

// Example usage:

const FiteredData = async (carEn, carId) => {
  if (!carEn) return;
  const carModelArray = carmodel.filter((item) =>
    item.make.toLowerCase().includes(carEn.toLowerCase())
  );

  for (let j = 0; j < carModelArray.length; j++) {
    try {
      await db.carDb.update({
        where: { id: carId },
        data: {
          CarModel: {
            create: {
              masterCar: carEn,
              carModelAr: "ar_" + carModelArray[j].model.toString(),
              carModelEn: carModelArray[j].model.toString(),
            },
          },
        },
      });
    } catch (error) {
      throw error;
    }
  }
};
