import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const userService = {
  getProfile: async (userId) => {
    return prisma.nguoi_dung.findUnique({
      where: { nguoi_dung_id: userId },
      select: {
        nguoi_dung_id: true,
        email: true,
        ho_ten: true,
        tuoi: true,
        anh_dai_dien: true,
      },
    });
  },

  updateProfile: async (userId, data) => {
    const allowed = (({ ho_ten, tuoi, anh_dai_dien }) => ({
      ho_ten,
      tuoi,
      anh_dai_dien,
    }))(data);
    return prisma.nguoi_dung.update({
      where: { nguoi_dung_id: userId },
      data: allowed,
    });
  },

  getSavedPhotos: async (userId) => {
    return prisma.luu_anh.findMany({
      where: { nguoi_dung_id: userId },
      include: {
        hinh_anh: true,
      },
    });
  },

  getCreatedPhotos: async (userId) => {
    return prisma.hinh_anh.findMany({
      where: { nguoi_dung_id: userId },
    });
  },
};
