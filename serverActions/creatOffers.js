"use server";
import db from "../lib/prisma";
import { faker } from "@faker-js/faker";
import { fakerAR } from "@faker-js/faker";

export const creatOffers = async () => {
  await db.offer.deleteMany();

  for (let i = 0; i < 50; i++) {
    const offerData = await createFakoffer();
    try {
      const Updatedata = await db.offer.create({
        data: {
          isActive: offerData.isActive,
          image: offerData.image,
          detailAr: offerData.detailAr,
          detailEn: offerData.detailEn,
        },
      });
      console.log(Updatedata);
    } catch (error) {
      console.log(error);
    }
  }

  console.log("ALL DONE ");
};

export const createFakoffer = async () => {
  const offerData = {
    isActive: true,
    image: faker.image.url(),
    detailAr: fakerAR.lorem.sentence(),
    detailEn: faker.lorem.sentence(),
  };
  return offerData;
};
