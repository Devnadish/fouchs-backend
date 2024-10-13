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
    throw new Error("Failed to add to favorites."); // Optional: rethrow the error for further handling
  }
};
