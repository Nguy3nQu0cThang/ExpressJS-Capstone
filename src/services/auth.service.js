import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

export const authService = {
  
  register: async ({ email, mat_khau, ho_ten, tuoi, anh_dai_dien }) => {
    const hashedPassword = await bcrypt.hash(mat_khau, 10);
    const user = await prisma.nguoi_dung.create({
      data: {
        email,
        mat_khau: hashedPassword,
        ho_ten,
        tuoi,
        anh_dai_dien,
      },
    });
    return { message: "Đăng ký thành công", userId: user.nguoi_dung_id };
  },

  login: async (email, password) => {
    console.log("prisma keys:", Object.keys(prisma));

    const user = await prisma.nguoi_dung.findFirst({ where: { email } });
    if (!user) throw new Error("Email không tồn tại");

    const isMatch = await bcrypt.compare(password, user.mat_khau);
    if (!isMatch) throw new Error("Sai mật khẩu");

    
    const payload = {
      nguoi_dung_id: user.nguoi_dung_id,
      email: user.email,
    };
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "7d" });

    return { message: "Đăng nhập thành công", accessToken };
  },
};
