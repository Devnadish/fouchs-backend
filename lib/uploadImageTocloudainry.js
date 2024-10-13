"use server";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
import db from "./prisma";

// Load environment variables from .env.local file
dotenv.config();

// Configure Cloudinary with your account details
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const upladImages = async () => {
  const imgaefromdb = await db.CarDb.findMany({
    select: { logo: true, id: true },
  });

  for (const car of imgaefromdb) {
    const result = await uploadToCloudinary(car.logo);
    if (result) {
      const carImageID = await db.CarDb.update({
        where: { id: car.id },
        data: { public_id: result },
      });
    }
  }
};

export async function uploadToCloudinary(imageName) {
  try {
    const result = await cloudinary.v2.uploader.upload(`public/${imageName}`, {
      upload_preset: process.env.CLOUDINARY_UNSIGNED_UPLOAD_PRESET,
    });
    return result.public_id;
  } catch (error) {
    throw error;
  }
}
