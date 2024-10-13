"use server";
import { faker } from "@faker-js/faker";
import { fakerAR } from "@faker-js/faker";
import db from "../lib/prisma";

export const createServices = async () => {
  await db.ServiceInfo.deleteMany();
  await db.ServiceFreeGift.deleteMany();
  await db.ServiceRate.deleteMany();
  await db.Service.deleteMany();

  for (let i = 0; i < 15; i++) {
    const ServiceData = await createFakeService();

    try {
      const Updatedata = await db.service.create({
        data: {
          titleAr: ServiceData.titleAr,
          titleEn: ServiceData.titleEn,
          descriptionAr: ServiceData.descriptionAr,
          descriptionEn: ServiceData.descriptionEn,
          image: ServiceData.image,
          rate: ServiceData.rate,
        },
      });
      // ----------------------
      await CreateInfo(Updatedata.id);
      await CreateGifts(Updatedata.id);
      await createFakeServiceRateForUser();
    } catch (error) {
      throw error;
    }
  }
};

const createFakeService = async () => {
  const rate = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
  const FakeService = {
    titleAr: fakerAR.lorem.words({ min: 3, max: 5 }),
    titleEn: faker.lorem.words({ min: 3, max: 5 }),
    descriptionAr: fakerAR.lorem.sentence(),
    descriptionEn: faker.lorem.sentence(),
    image: faker.image.url(),
    rate: rate,
  };
  return FakeService;
};

const CreateInfo = async (id) => {
  const randNumber = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
  for (let i = 0; i < randNumber; i++) {
    const ServiceInfoData = await createFakeServiceInfo();
    await db.ServiceInfo.create({
      data: {
        service: {
          connect: { id: id }, // Connect to the existing service by its ID
        },
        infoAr: ServiceInfoData.infoAr,
        infoEn: ServiceInfoData.infoEn,
      },
    });
  }
};

const CreateGifts = async (id) => {
  const randNumber = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
  for (let i = 0; i < randNumber; i++) {
    const giftData = await createFakeServiceFreeGift();
    await db.ServiceFreeGift.create({
      data: {
        service: {
          connect: { id: id }, // Connect to the existing service by its ID
        },
        giftAr: giftData.giftAr,
        giftEn: giftData.giftEn,
        image: giftData.image,
      },
    });
  }
};
const createFakeServiceInfo = async () => {
  const FakeServiceInfo = {
    infoAr: fakerAR.lorem.sentence(),
    infoEn: faker.lorem.sentence(),
  };

  return FakeServiceInfo;
};

const createFakeServiceFreeGift = async () => {
  const FakeServiceFreeGift = {
    giftAr: fakerAR.lorem.words({ min: 3, max: 5 }),
    giftEn: faker.lorem.words({ min: 3, max: 5 }),
    image: faker.image.url(),
  };

  return FakeServiceFreeGift;
};

const createFakeServiceRate = async (userId, userName, rate) => {
  const FakeServiceRate = {
    userId: userId,
    userName: userName,
    rate: rate,
    comment: faker.lorem.sentence(),
  };

  return FakeServiceRate;
};

const createFakeServiceRateForUser = async () => {
  const services = await db.Service.findMany(); // Fetch all services
  const users = await db.User.findMany(); // Fetch all users

  // Loop through the users and create a service rate for each user
  for (let i = 0; i < users.length; i++) {
    const rate = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    const userId = users[i].id;
    const userName = users[i].name;
    const rateData = await createFakeServiceRate(userId, userName, rate);

    for (let i = 0; i < services.length; i++) {
      await db.ServiceRate.create({
        data: {
          service: {
            connect: { id: services[i].id }, // Connect to the existing service by its ID
          },
          userId: rateData.userId,
          userName: rateData.userName,
          rate: rateData.rate,
          comment: rateData.comment,
        },
      });
    }
  }
};
