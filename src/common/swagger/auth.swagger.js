const authSwagger = {
  "/auth/register": {
    post: {
      tags: ["Auth"],
      summary: "Đăng ký người dùng",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: { type: "string" },
                mat_khau: { type: "string" },
                ho_ten: { type: "string" },
                tuoi: { type: "integer" },
                anh_dai_dien: { type: "string" },
              },
              required: ["email", "mat_khau", "ho_ten", "tuoi"],
            },
          },
        },
      },
      responses: {
        200: {
          description: "Đăng ký thành công",
        },
      },
    },
  },
  "/auth/login": {
    post: {
      tags: ["Auth"],
      summary: "Đăng nhập",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: { type: "string" },
                mat_khau: { type: "string" },
              },
              required: ["email", "mat_khau"],
            },
          },
        },
      },
      responses: {
        200: {
          description: "Trả về accessToken",
        },
      },
    },
  },
};

export default authSwagger;
