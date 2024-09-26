export function getSelectData(language, userId) {
  return language === "ar"
    ? {
        id: true,
        nameAr: true,
        usersRate: true,
        masterImage: true,
        cityAr: true,
        branchLikeByUser: {
          where: { userId: userId },
          select: { id: true },
        },
      }
    : {
        id: true,
        nameEn: true,
        usersRate: true,
        masterImage: true,
        cityEn: true,
        branchLikeByUser: {
          where: { userId: userId },
          select: { id: true },
        },
      };
}
