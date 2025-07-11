import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const savedService = {
  checkSaved: async (userId, photoId) => {
    const saved = await prisma.luu_anh.findUnique({
      where: {
        nguoi_dung_id_hinh_id: {
          nguoi_dung_id: userId,
          hinh_id: photoId,
        },
      },
    });
    return !!saved;
  },

  save: async (userId, photoId) => {
    return prisma.luu_anh.upsert({
      where: {
        nguoi_dung_id_hinh_id: {
          nguoi_dung_id: userId,
          hinh_id: photoId,
        },
      },
      update: {},
      create: {
        nguoi_dung_id: userId,
        hinh_id: photoId,
      },
    });
  },
};