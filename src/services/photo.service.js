import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const photoService = {
  getAll: async () => {
    return prisma.hinh_anh.findMany();
  },

  searchByName: async (ten_hinh) => {
    return prisma.hinh_anh.findMany({
      where: {
        ten_hinh: {
          contains: ten_hinh,
          mode: "insensitive",
        },
      },
    });
  },

  getById: async (id) => {
    return prisma.hinh_anh.findUnique({
      where: { hinh_id: id },
      include: {
        nguoi_dung: {
          select: {
            nguoi_dung_id: true,
            ho_ten: true,
            anh_dai_dien: true,
          },
        },
      },
    });
  },

  create: async (userId, data) => {
    return prisma.hinh_anh.create({
      data: {
        ...data,
        nguoi_dung_id: userId,
      },
    });
  },

  delete: async (photoId) => {
    return prisma.hinh_anh.delete({
      where: { hinh_id: photoId },
    });
  },
};
