"use server";
import {
  createFakBranche,
  createFakBrancheImage,
} from "@/fakeData/createFakeBranches";
import db from "../lib/prisma";

export const createBranches = async () => {
  await db.BranchImage.deleteMany();
  await db.Branch.deleteMany();
  const city = await db.cityDb.findMany();

  for (let i = 0; i < 50; i++) {
    const brData = await createFakBranche(city);
    try {
      const Updatedata = await db.Branch.create({
        data: {
          nameAr: brData.nameAr,
          nameEn: brData.nameEn,
          cityId: brData.cityId,
          cityAr: brData.cityAr,
          cityEn: brData.cityEn,
          distAr: brData.distAr,
          distEn: brData.distEn,
          lat: brData.lat.toString(),
          long: brData.long.toString(),
          mobile: brData.mobile,
          masterImage: brData.masterImage,
          googleRate: brData.googleRate,
          usersRate: brData.usersRate,
          workIngHours: brData.workIngHours,
          Note: brData.Note,
          addreesAr: brData.addreesAr,
          addreesEn: brData.addreesEn,
        },
      });
      console.log(Updatedata);
    } catch (error) {
      console.log(error);
    }
  }

  console.log("ALL DONE ");
};

export const createBranchImages = async () => {
  await db.BranchImage.deleteMany();

  const branches = await db.Branch.findMany();
  for (let i = 0; i < branches.length; i++) {
    const brData = branches[i];
    const brImageData = await createFakBrancheImage(brData.id);
    for (let i = 0; i < brImageData.length; i++) {
      const Updatedata = await db.Branch.update({
        where: {
          id: brImageData[i].branchId,
        },
        data: {
          image: {
            create: {
              image: brImageData[i].image,
            },
          },
        },
      });
      console.log(Updatedata);
    }
  }
};
