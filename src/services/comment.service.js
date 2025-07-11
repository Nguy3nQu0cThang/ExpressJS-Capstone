import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const commentService = {
  getByPhotoId: async (photoId) => {
    return prisma.binh_luan.findMany({
      where: { hinh_id: photoId },
      include: {
        nguoi_dung: {
          select: {
            nguoi_dung_id: true,
            ho_ten: true,
            anh_dai_dien: true,
          },
        },
      },
      orderBy: {
        ngay_binh_luan: "desc",
      },
    });
  },

  create: async (userId, photoId, content) => {
    return prisma.binh_luan.create({
      data: {
        nguoi_dung_id: userId,
        hinh_id: photoId,
        noi_dung: content,
      },
    });
  },
};