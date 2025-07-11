const userSwagger = {
  "/user/profile": {
    get: {
      tags: ["User"],
      summary: "Lấy thông tin cá nhân",
      responses: { 200: { description: "Thông tin user" } },
      security: [{ bearerAuth: [] }],
    },
    put: {
      tags: ["User"],
      summary: "Cập nhật thông tin cá nhân",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ho_ten: { type: "string" },
                tuoi: { type: "integer" },
                anh_dai_dien: { type: "string" },
              },
            },
          },
        },
        responses: { 200: { description: "Cập nhật thành công" } },
        security: [{ bearerAuth: [] }],
      },
    },
    "/user/saved": {
      get: {
        tags: ["User"],
        summary: "Lấy danh sách ảnh đã lưu",
        responses: { 200: { description: "Danh sách ảnh đã lưu" } },
        security: [{ bearerAuth: [] }],
      },
    },
    "/user/created": {
      get: {
        tags: ["User"],
        summary: "Lấy danh sách ảnh đã tạo",
        responses: { 200: { description: "Danh sách ảnh đã tạo" } },
        security: [{ bearerAuth: [] }],
      },
    },
  },
};

export default userSwagger;
