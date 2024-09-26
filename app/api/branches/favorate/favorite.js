import db from "../../../../lib/prisma";

export const RemoveFromFav = async (userId, branchId) => {
  console.log(userId, branchId);
  try {
    // Find the branch like entry for the given user and branch
    const branchLikeEntry = await db.branchLikeByUser.findFirst({
      where: {
        branchId,
        userId,
      },
    });

    // Check if the entry exists
    if (!branchLikeEntry) {
      console.warn("No favorite found for this user and branch.");
      return null; // or throw an error if preferred
    }

    // Delete the found entry
    const deletedEntry = await db.branchLikeByUser.delete({
      where: { id: branchLikeEntry.id },
    });

    return deletedEntry;
  } catch (error) {
    console.error("Error during Delete Favorite operation:", error);
    throw new Error("Failed to remove favorite"); // Optionally rethrow the error
  }
};

export const getFavorite = async (userId) => {
  try {
    const branches = await db.branch.findMany({
      include: {
        branchLikeByUser: {
          where: {
            userId: currentUserId, // Replace with the actual user ID
          },
        },
      },
    });
    return branches;
  } catch (error) {
    console.error("Error during Delete Favorite operation:", error);
    throw new Error("Failed to remove favorite"); // Optionally rethrow the error
  }
};
