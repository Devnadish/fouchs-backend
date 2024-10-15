"use server";
import { getBase64Image } from "@/lib/imageFunctions";
import db from "../lib/prisma";
import { faker } from "@faker-js/faker";

export const creatOffers = async () => {
  await db.offer.deleteMany();
  console.log("All previous offers deleted.");

  // Step 1: Create offers with base64 image
  for (let i = 0; i < 50; i++) {
    const imageUrl = faker.image.url(); // Generate a random image URL
    const offerData = {
      isActive: true,
      image: imageUrl,
      detailAr: faker.lorem.sentence(),
      detailEn: faker.lorem.sentence(),
    };

    try {
      // Fetch the Base64 image
      const base64Image = await getBase64Image(imageUrl);

      // Create the offer with the Base64 image
      const createdOffer = await db.offer.create({
        data: {
          ...offerData,
          imageHash: base64Image, // Store the Base64 image directly
        },
      });
      console.log(`Offer ${i + 1} created successfully:`, createdOffer);
    } catch (error) {
      console.error("Error creating offer in database:", error);
    }
  }

  console.log("All offers creation completed.");
};

// "use server";
// import { getBase64Image } from "@/lib/imageFunctions";
// import db from "../lib/prisma";
// import { faker } from "@faker-js/faker";

// export const creatOffers = async () => {
//   await db.offer.deleteMany();
//   console.log("All previous offers deleted.");

//   // Step 1: Create offers without base64 image
//   for (let i = 0; i < 50; i++) {
//     const offerData = {
//       isActive: true,
//       image: faker.image.url(),
//       detailAr: faker.lorem.sentence(),
//       detailEn: faker.lorem.sentence(),
//     };

//     try {
//       const createdOffer = await db.offer.create({
//         data: offerData,
//       });
//       console.log(`Offer ${i + 1} created successfully:`, createdOffer);
//     } catch (error) {
//       console.error("Error creating offer in database:", error);
//     }
//   }

//   console.log("All offers creation completed.");

//   // Step 2: Update offers with base64 images
//   await updateOffersWithBase64();
// };

// const updateOffersWithBase64 = async () => {
//   const offers = await db.offer.findMany();

//   for (const offer of offers) {
//     try {
//       const base64Image = await getBase64Image(offer.image); // Fetch the base64 image

//       // Log the base64 image to verify it's correct
//       console.log(`Base64 Image for Offer ${offer.id}:`, base64Image);

//       const updatedOffer = await db.offer.update({
//         where: { id: offer.id },
//         data: { imageHash: base64Image },
//       });

//       // Log the updated offer response
//       console.log(`Updated offer ${offer.id} with base64 image:`, updatedOffer);
//     } catch (error) {
//       // Log detailed error information from Prisma
//       console.error(`Error updating offer ${offer.id}:`, error.message);
//       if (error.code) {
//         console.error(`Prisma error code: ${error.code}`);
//       }
//       if (error.meta) {
//         console.error(`Prisma error meta:`, error.meta);
//       }
//     }
//   }

//   console.log("All offers updated with base64 images.");
// };}

//   console.log("All offers creation completed.");

//   // Step 2: Update offers with base64 images
//   await updateOffersWithBase64();
// };

// const updateOffersWithBase64 = async () => {
//   const offers = await db.offer.findMany();

//   for (const offer of offers) {
//     try {
//       const base64Image = await getBase64Image(offer.image); // Fetch the base64 image

//       // Log the base64 image to verify it's correct
//       console.log(`Base64 Image for Offer ${offer.id}:`, base64Image);

//       const updatedOffer = await db.offer.update({
//         where: { id: offer.id },
//         data: { imageHash: base64Image },
//       });

//       // Log the updated offer response
//       console.log(`Updated offer ${offer.id} with base64 image:`, updatedOffer);
//     } catch (error) {
//       // Log detailed error information from Prisma
//       console.error(`Error updating offer ${offer.id}:`, error.message);
//       if (error.code) {
//         console.error(`Prisma error code: ${error.code}`);
//       }
//       if (error.meta) {
//         console.error(`Prisma error meta:`, error.meta);
//       }
//     }
//   }

//   console.log("All offers updated with base64 images.");
// };
