import db from "@/lib/prisma";

export const updateCity = async (mobile, cityId, city) => {
  try {
    // Find the user by mobile number
    const user = await db.user.findUnique({
      where: { mobile: mobile },
    });

    if (!user) {
      return { statusCode: 404, msg: "User not found" };
    }

    // Upsert the profile, linking it with the user
    const data = await db.profile.upsert({
      where: { userId: user.id }, // Assuming userId is the foreign key in the profile table
      update: {
        cityId: cityId,
        city: city,
      },
      create: {
        userId: user.id, // Link the new profile to the user
        cityId: cityId,
        city: city,
      },
    });

    return data;
  } catch (error) {
    return { statusCode: 500, msg: "Error updating City data" };
  }
};
