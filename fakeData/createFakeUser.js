"use server";
import { faker } from "@faker-js/faker";

export const createFakeUser = async () => {
  const userData = {
    name: faker.person.fullName(),
    email: faker.internet.exampleEmail(),
    mobile: faker.phone.imei(),
    password: "19721972",
    smsToken: Math.floor(1000 + Math.random() * 9000).toString(),
    city: faker.location.city(),
    car: faker.vehicle.vehicle(),
    carModel: faker.vehicle.model(),
    carYear: (Math.floor(Math.random() * (max - min + 1)) + min).toString(),
    avatar: faker.image.avatar(),
  };
  return userData;
};
