"use server";
import { faker } from "@faker-js/faker";
import { fakerAR } from "@faker-js/faker";

export const createFakBranche = async () => {
  const branchData = {
    nameAr: fakerAR.lorem.words({ min: 3, max: 5 }),
    nameEn: faker.word.words({ count: { min: 3, max: 5 } }),
    cityAr: fakerAR.location.city(),
    cityEn: faker.location.city(),
    distAr: fakerAR.location.city(),
    distEn: faker.location.city(),
    lat: faker.location.latitude(),
    long: faker.location.longitude(),
    mobile: faker.phone.imei(),
    masterImage: faker.image.url(),
    googleRate: (Math.floor(Math.random() * (99 - 10 + 1)) + 10).toString(),
    usersRate: (Math.floor(Math.random() * (99 - 10 + 1)) + 10).toString(),
    workIngHours: "Woking Hours",
    Note: faker.lorem.sentence(),
    addreesAr: fakerAR.lorem.sentence(),
    addreesEn: faker.lorem.sentence(),
  };
  return branchData;
};

export const createFakBrancheImage = async (brID) => {
  const numOfImages = Math.floor(Math.random() * 10) + 1;
  const images = Array.from({ length: numOfImages }, () => ({
    image: faker.image.url(),
    branchId: brID,
  }));
  return images;
};
