import db from "../../../../lib/prisma";

export const addToFav = async (userId, branchId) => {
  try {
    // Check if the favorite already exists
    const existingFavorite = await db.branchLikeByUser.findFirst({
      where: {
        userId: userId,
        branchId: branchId,
      },
    });

    // If it exists, return a message or handle accordingly
    if (existingFavorite) {
      console.log("This branch is already favorited by the user.");
      return { message: "This branch is already favorited." };
    }

    // If it doesn't exist, create a new favorite
    const data = await db.branchLikeByUser.create({
      data: {
        branch: {
          connect: { id: branchId },
        },
        userId,
      },
    });

    return data;
  } catch (error) {
    console.error("Error during Create Favorite operation:", error);
    throw new Error("Failed to add to favorites."); // Optional: rethrow the error for further handling
  }
};

// export const addToFav = async (userId, branchId) => {
//   console.log(userId, branchId);
//   try {
//     const data = await db.branchLikeByUser.create({
//       data: {
//         branch: {
//           connect: { id: branchId }, // Connect to the existing user
//         },
//         userId,
//       },
//     });
//     return data;
//   } catch (error) {
//     console.error("Error during Create Favorite  operation:", error);
//   }
// };
