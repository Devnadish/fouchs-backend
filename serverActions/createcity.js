"use server";
import db from "../lib/prisma";
import { cities } from "@/constant/City";

export const createCityes = async () => {
  await db.cityDb.deleteMany();

  for (let i = 0; i < cities.length; i++) {
    try {
      const Updatedata = await db.cityDb.create({
        data: {
          cityAr: cities[i].cityAr,
          cityEn: cities[i].cityEn,
        },
      });
      console.log(Updatedata);
    } catch (error) {
      console.log(error);
    }
  }
};
